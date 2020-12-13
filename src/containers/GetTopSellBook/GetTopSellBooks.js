/**
 * This component show the top sellBook
 * getting tha data and show  it ,and the book card link to /books/:bookid click the book card , redirect to that link
 * pass isbn clicked book through http params
 *
 */

import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {string} author -bookauthor
 * @param {string} book_image -book cover image
 * @param {string} publisher -book publisher
 * @param {string} title-book title
 * @param {string} list_name- list name(gategory) the book have
 * @param {int} rank -  book rank in the last week
 * @param {int} isbn  isbn10 of book
 */
function GetTopSellBooks({
  author,
  book_image,
  publisher,
  title,
  list_name,
  isbn,
  rank,
}) {
  return (
    <div className="cardsize">
      <Link to={"/books/" + isbn} className="text-decoration-none">
        <div className="card border border-white">
          <img
            className="cardimg card-img-top"
            src={
              book_image
                ? book_image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHmiTH7Kqj_DawkfGi9b2B3d-0k6ww416tQ&usqp=CAU"
            }
            alt="Card"
          />
          <div className="card-body">
            <small>
              <div className="d-flex flex-column">
                <div className="text-dark"> {title}</div>
                <div> {author}</div>
                <div>
                  <small className=""> {publisher}</small>
                </div>
                <div>
                  <small className="text-muted"> Last week rank : {rank}</small>
                </div>

                <small className="text-muted"> {list_name}</small>
              </div>
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GetTopSellBooks;
