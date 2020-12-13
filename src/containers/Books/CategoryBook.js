/**
 *Linke  "/categorybooks/:cid" path show this
 * When Click the @ShoeCategoryListbook for see more  detail come to this page ,
 * seachr book from category book store and search image from topbooks that book datails pass to @book component to show book
 *
 *
 *
 */

import React from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";

/**
 * find the book and show it
 * @param {Number} cid- book id comes from  @GetFiveCategoryBooks acoording to clicked book { url params}
 * @param {Array} haveimage - book ----search and get from "topbooks"
 * @param {Array} catbook - book - search and get from "category-bookstore"
 */
function CategoryBook() {
  const { cid } = useParams();

  /**
   *Firct check book is available in session storage "topbooks" for get image book
   *
   */
  let hanveimage = JSON.parse(sessionStorage.getItem("topbooks")).filter(
    (book) => {
      return book.primary_isbn10 === cid;
    }
  );
  let catbook = JSON.parse(sessionStorage.getItem("category-bookstore")).filter(
    (book) => {
      return book.isbns[0].isbn10 === cid;
    }
  );

  /**
   * if book availabele
   * show to book pass data to @Book component
   *
   *
   */
  return (
    <div>
      {catbook.length !== 0 ? (
        <div>
          <Book
            book_image={hanveimage.length !== 0 ? hanveimage[0].book_image : ""}
            contributor={catbook[0].book_details[0].contributor}
            publisher={catbook[0].book_details[0].publisher}
            title={catbook[0].book_details[0].title}
            author={catbook[0].book_details[0].author}
            description={catbook[0].book_details[0].description}
            rank_last_week={catbook[0].rank_last_week}
            rank={catbook[0].rank}
            primary_isbn10={catbook[0].isbns[0].isbn10}
            amazon_product_url={catbook[0].amazon_product_url}
            list_name={catbook[0].list_name}
          />
        </div>
      ) : (
        <div>
          <h1 className="text-primary text-center">NOT FOUND</h1>
        </div>
      )}
    </div>
  );
}

export default CategoryBook;
