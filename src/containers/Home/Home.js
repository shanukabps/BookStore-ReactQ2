/**
 * This component Get top 5 books for all the Best Sellers lists for specified date dhoe top ranked book in every category
 * and user can search book from top 5 books for all the Best Sellers lists.
 * And user can goto specific book category using @deropdown menu button
 *
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import GetListName from "../GetListName/GetListName";
import GetTopSellBooks from "../GetTopSellBook/GetTopSellBooks";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import "./dropdownMenu.css";

/**
 * This Home functional component show top ranked book from each list user can search book from from top 5 books for all the Best Sellers lists
 *
 * @param {Array} bookcategory -  top 5 books for all the Best Sellers lists
 * @param {String} search - user search input
 * @param {searchBook} -searched book respect to @param search
 * @param {Array} topbooks -All the boo in top 5 books for all the Best Sellers lists
 *
 *
 */

function Home() {
  const [bookcategory, setbookCatogory] = useState(null);
  const [search, setSearch] = useState("");
  const [searchBook, setSearchBook] = useState([]);
  let topbooks = [];

  /**
   * checked the session storage "bookstore " if it is null ,call @function fetchbookCatogory otherwise get data from session storage "bookstore " and set it in to bookCategory
   */

  useEffect(() => {
    if (sessionStorage.getItem("bookstore") === null) {
      fetchbookCatogory();
    } else {
      setbookCatogory(JSON.parse(sessionStorage.getItem("bookstore")));
    }
  }, []);

  /**
   *  @param topbooks stored session storage
   *
   */
  useEffect(() => {
    sessionStorage.setItem("topbooks", JSON.stringify(topbooks));
  }, [bookcategory]);

  /**
   * checked the search is available or not ,if search available ,filter the search book title  from top 5 books for all the Best Sellers lists
   * get the book and set that book in to @param searchBook otherwise it set empty array
   */

  useEffect(() => {
    if (search) {
      let searchbook = JSON.parse(sessionStorage.getItem("topbooks")).filter(
        (book) => {
          return book.title.toLowerCase().includes(search);
        }
      );
      setSearchBook(searchbook);
    } else {
      setSearchBook([]);
    }
  }, [search]);

  // ap - api-Key
  const ap = "psLOCIWUdwAFRtYu7cVMWgXXB6FdAmGx";

  /**
   * Fetched data from api (get overview books(top 5 books for all the Best Sellers lists))
   * store that list in session storage and set that data to bookCategory
   */

  const fetchbookCatogory = async () => {
    await axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/overview.json?&api-key=${ap}`
      )

      .then((response) => {
        /**
         * response.data conver to JSON and store it in session storage
         */
        sessionStorage.setItem(
          "bookstore",
          JSON.stringify(response.data.results.lists)
        );
        setbookCatogory(response.data.results.lists);

        /**
         * get leases bookcategory sored in session and that text dta convert to json and set it to bookcategory
         */
        // setbookCatogory(JSON.parse(sessionStorage.getItem("bookstore")));
      })
      .catch((error) => console.log(error));
  };

  /**
   * check bookcategory list if it not null then map bookcategory and find the book and store tha book in @param topbooks
   *
   */

  if (bookcategory !== null) {
    bookcategory.forEach((list) => {
      list.books.forEach((books) => {
        topbooks.push(books);
      });
    });
  }

  return (
    // show the input search
    <div className="m-3">
      <div className="input-group ">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <SearchIcon />
          </span>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
      {/* 
      show the ropdown menu this menu has list_name (category)
      if search has value displaye searchbook

      check the bookcategory is availabele or not if availabele 
      if avilable shoe rop rank book ein each list
      otherwise show loading

 
 */}
      {bookcategory ? (
        <div className="d-flex">
          <div className=" mr-auto"></div>
          <div className="dropdown">
            <button className="dropbtn">
              <MenuIcon />
            </button>
            <div className="dropdown-content">
              {bookcategory.map((list, i) => {
                return (
                  <GetListName
                    key={i + "homelistname"}
                    list_name={list.list_name}
                  />
                );
              })}
            </div>
          </div>
          <div className="wapserch">
            {searchBook.length !== 0 ? (
              <div className="border-right  mt-1 mr-1">
                <GetTopSellBooks
                  key={"sa" + 1 + "searchbooks"}
                  author={searchBook[0].author}
                  book_image={searchBook[0].book_image}
                  publisher={searchBook[0].publisher}
                  title={searchBook[0].title}
                  rank={searchBook[0].rank_last_week}
                  isbn={searchBook[0].primary_isbn10}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className=" p-2 mt-1 mr-auto">
            <div>
              <h4 className="text-primary mb-5 text-center">
                TOP SOLD BOOK IN EACH LIST
              </h4>
            </div>
            <div className="wap">
              {bookcategory.map((list, i) => {
                return list.books.slice(0, 1).map((listbooks) => {
                  return (
                    <GetTopSellBooks
                      key={"2a" + i + "books"}
                      author={listbooks.author}
                      book_image={listbooks.book_image}
                      publisher={listbooks.publisher}
                      title={listbooks.title}
                      list_name={list.list_name}
                      rank={listbooks.rank_last_week}
                      isbn={listbooks.primary_isbn10}
                    />
                  );
                });
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-primary text-center">Loading...</h1>
        </div>
      )}
    </div>
  );
}
export default Home;
