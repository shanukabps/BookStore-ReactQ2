/**
 *This component show the books in specific list_name(Category)
 *we can see more details clicking the item
 *
 *
 */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GetFiveCategoryBooks from "../GetFiveCategoryBooks/GetFiveCategoryBooks";

/**
 * show the book in specific category ,fetch the data from api
 * store that book in session storage as category-bookstore
 * @param {staring} listname -listname specifc book list name that name send from Home component as http parameter
 * @param {Array} data - books in specific list name(category)
 */

function ShowCategoryListbooks() {
  let { listname } = useParams();
  const [data, setData] = useState(null);

  /**
   * fetched data from api
   */

  useEffect(() => {
    fetchdata();
  }, []);

  //api key
  const ap = "psLOCIWUdwAFRtYu7cVMWgXXB6FdAmGx";

  /**
   *fetch data from according to given list name and store that data in a session storeage as "category-bookstore" and set fetched data in to @param data
  
   */
  const fetchdata = async () => {
    await axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists.json?list=${listname}&&api-key=${ap}`
      )

      .then((response) => {
        /**
         * response.data conver to JSON and store it in session storage
         */
        sessionStorage.setItem(
          "category-bookstore",
          JSON.stringify(response.data.results)
        );
        setData(response.data.results);

        /**
         * get leases data sored in session and that text dta convert to json and set it to data
         */
        // setdata(JSON.parse(sessionStorage.getItem("bookstore")));
      })
      .catch((error) => console.log(error));
  };
  /**
   * if data is available not null call render GetFiveCategoryBooks show the book otherwise show loading
   *
   *
   */
  return (
    <div>
      {data !== null ? (
        <div>
          <div>
            <h2 className="text-center mt-2 mb-5">{listname}</h2>
          </div>
          <div className="wap">
            {data.map((list, i) => {
              return (
                <GetFiveCategoryBooks
                  key={"2a" + i + "books"}
                  author={list.book_details[0].author}
                  book_image={list.book_details[0].book_image}
                  publisher={list.book_details[0].publisher}
                  title={list.book_details[0].title}
                  isbn={list.isbns[0].isbn10}
                  rank={list.rank_last_week}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h1 className="text-primary text-center">Loading...</h1>
      )}
    </div>
  );
}

export default ShowCategoryListbooks;
