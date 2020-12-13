/**
 *show the detailed description of book ,click the nook card show this book component
 *
 *
 */

import React from "react";
/**
 *Show the book with more details
 * @param {string} author -bookauthor
 * @param {string} contributer -contributed to bokk
 * @param {string} book_image -book cover image
 * @param {string} publisher -book publisher
 * @param {string} title-book title
 * @param {string} list_name- list name(gategory) the book have
 * @param {Number} rank -  book rankin now
 * @param {Number} primary_isbn10  isbn10 of book
 * @param {Number}  rank_last_week  book rank in the last week
 * @param {String} description -decdription of the book
 *
 *
 */
function Book({
  book_image,
  contributor,
  publisher,
  title,
  author,
  description,
  rank_last_week,
  primary_isbn10,
  amazon_product_url,
  list_name,
  rank,
}) {
  return (
    <div>
      <h3 className="text-center text-primary">{list_name ? list_name : ""}</h3>
      <div className="d-flex m-5">
        <div className="p-2 flex-fill  m-5">
          <img
            className="bookimg"
            src={
              book_image
                ? book_image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHmiTH7Kqj_DawkfGi9b2B3d-0k6ww416tQ&usqp=CAU"
            }
            alt="Card"
          />
        </div>
        <div className="flex-fill  m-5">
          <h6 className="card-title">{title}</h6>
          <p className="card-text ">
            <span className="text-primary font-weight-bold"> Author : </span>
            {author}
          </p>
          <p>
            <small>
              <span className="text-primary font-weight-bold">
                Contibutor :
              </span>
              {contributor}
            </small>
          </p>
          <p className="card-text ">
            <small>
              <span className="text-primary font-weight-bold">
                Description:
              </span>
              {description}
            </small>
          </p>

          <p className="card-text">
            <small className="">
              <span className="text-primary font-weight-bold">Publisher :</span>
              {publisher}
            </small>
          </p>
          <p className="card-text">
            <small>
              <span className="text-primary font-weight-bold">ank now :</span>
              {rank}
            </small>
          </p>
          <p className="card-text">
            <small>
              <span className="text-primary font-weight-bold">
                Ranked last week :{" "}
              </span>
              {rank_last_week}
            </small>
          </p>
          <p className="card-text">
            <small>
              <span className="text-primary font-weight-bold"> ISBN10: </span>
              {primary_isbn10}
            </small>
          </p>
          <a href={amazon_product_url}>
            <button type="button" className="btn btn-primary">
              BUY NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Book;
