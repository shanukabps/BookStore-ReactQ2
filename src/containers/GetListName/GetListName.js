/**
 * show the listname
 *
 */

import React from "react";
import { Link } from "react-router-dom";

function GetListName({ list_name }) {
  return (
    <div>
      <Link className="text-decoration-none" to={"/listname/" + list_name}>
        <p className="font-weight-bold text-secondry"> {list_name} </p>
      </Link>
    </div>
  );
}

export default GetListName;
