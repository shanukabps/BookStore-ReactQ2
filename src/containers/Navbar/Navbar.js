/**
 * NavBar  functional component
 * Click the Diffrent And Tenants can goto Home page
 * if Stay Home page it not work
 * Always show this Navbar
 */

import React from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
/**
 *
 * @ Different and Tenant Link to Home page
 *
 */
function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-light  bg-light">
        <Link className="text-decoration-none  text-sm" to={"/"}>
          <div className="d-flex">
            <MenuBookOutlinedIcon fontSize="large" />
            <h3 className=" text-justify text-primary font-weight-bold">
              BOOKSTORE
            </h3>
          </div>
        </Link>
        <Link
          className="text-decoration-none text-dark font-weight-bold text-sm"
          to={"/"}
        >
          HOME
          <StorefrontIcon fontSize="large" />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
