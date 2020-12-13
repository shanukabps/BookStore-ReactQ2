/**
 * Footer functional component
 * This is footer of the web page include 3 card and one footer flex box
 * Boostrap and meterial ui icons use to design this style
 *
 */

import React from "react";
import CallIcon from "@material-ui/icons/Call";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

/**
 * @function show the footer of webpage
 *
 *
 *
 */

function Footer() {
  return (
    <div>
      {/*
       *This is flex bo show the footer Company,Owner Resourse block
       *
       *
       */}
      <div className=" mt-5 mr-5 ml-5">
        <div className="d-flex ">
          <div className="div-2 bg-light flex-fill ">
            <div className="mb-4 mt-5">
              <CallIcon color="primary" fontSize="large" />
            </div>
            <div className="mb-4 ">
              <TwitterIcon color="primary" fontSize="large" />
            </div>
            <div className="mb-4">
              <LinkedInIcon color="primary" fontSize="large" />
            </div>
          </div>
          <div className="p-2 bg-light flex-fill ">
            <h5 className="text-dark mb-4">Company</h5>
            <small>
              <p>About</p>
              <p>Contact Us</p>
              <p>press</p>
              <p>Terms of service</p>
              <p>Privacy policy</p>
            </small>
          </div>
          <div className="p-2 bg-light flex-fill ">
            <h5 className="text-dark mb-4">Make Money with Us</h5>
            <small>
              <p>Sell products on Amazon</p>
              <p>Sell apps on Amazon</p>
              <p>Become an Affiliate</p>
              <p>Advertise Your Products</p>
              <p>Self-Publish with Us</p>
              <p>Owner FAQs</p>
            </small>
          </div>

          <div className="p-2 bg-light flex-fill ">
            <h5 className="text-dark mb-4">Resources</h5>
            <small>
              <p>Blog</p>
              <p>Investor Relations</p>
              <p>Terms of service</p>
              <p>Amazon Toursr</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
