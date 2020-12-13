/**
 *
 * This component show the
 * according to given data and the book card link to "/categorybooks/bookid" click the book card , redirect to that link
 * pass isbn clicked book through http params
 *
 *
 *
 */

import React from "react";
import { Link } from "react-router-dom";
/**
 *
 * @param {string} author -bookauthor
 * @param {string} publisher -book publisher
 * @param {string} title-book title
 * @param {string} list_name- list name(gategory) the book have
 * @param {int} rank -  book rank in the last week
 * @param {int} isbn  isbn10 of book
 */
function GetFiveCategoryBooks({
  author,
  isbn,
  publisher,
  title,
  rank,
  book_image,
}) {
  return (
    <div>
      <div className="cardsizeb">
        <div className="card border border-white">
          <Link to={"/categorybooks/" + isbn} className="text-decoration-none">
            <img
              className="cardimgb card-img-top"
              src={
                book_image
                  ? book_image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHmiTH7Kqj_DawkfGi9b2B3d-0k6ww416tQ&usqp=CAU"
              }
              alt="Card"
            />

            <div className="card-body text-dark">
              <h6 className="card-title ">{title}</h6>
              <p className="card-text">
                <small className="font-weight-bold">
                  <span className="text-secondary"> AUTHOR: </span>
                  {author}
                </small>
              </p>
              <p className="card-text">
                <small className="font-weight-bold">
                  <span className="text-secondary"> Publisher: </span>
                  {publisher}
                </small>
              </p>
              <p className="card-text">
                <small className="font-weight-bold">
                  <span className="text-secondary">ISBN01 : </span>
                  {isbn}
                </small>
              </p>
              <p className="card-text ">
                <small className="font-weight-bold">
                  <span className="text-secondary">Ranked last week : </span>{" "}
                  {rank}
                </small>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetFiveCategoryBooks;
