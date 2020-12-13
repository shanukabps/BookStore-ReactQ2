/**
 * Link "/books/:bookid"
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
 * @param {Number} bookid- book id comes from  @GetTOPSellBooks acoording to clicked book { url params}
 * @param {Array} haveimage - book ----search and get from "topbooks"
 * @param {Array} catbook - book - search and get from "category-bookstore"
 */
function TopBook() {
  let { bookid } = useParams();

  /**
   * check book is available in session storage "topbooks"
   */

  let topbook = JSON.parse(sessionStorage.getItem("topbooks")).filter(
    (book) => {
      return book.primary_isbn10 === bookid;
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
      {topbook.length !== 0 ? (
        <div>
          <Book
            book_image={topbook[0].book_image}
            contributor={topbook[0].contributor}
            publisher={topbook[0].publisher}
            title={topbook[0].title}
            author={topbook[0].author}
            description={topbook[0].description}
            rank={topbook[0].rank}
            rank_last_week={topbook[0].rank_last_week}
            primary_isbn10={topbook[0].primary_isbn10}
            amazon_product_url={topbook[0].amazon_product_url}
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

export default TopBook;
