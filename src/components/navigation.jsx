import React from "react";
import Cartcon from "../assets/log.png"
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fliud">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>

          <a className="navbar-brand page-scroll  nav-img-text" href="#page-top" >
            <span> <img className="icon_styles nav-logo" src={Cartcon} alt="Home" width="70" height="70" /></span>
            <span> BEST WESTERN LOGISTICS</span>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Our Partners
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
          
            <li>
              <a href="#contact" className="page-scroll">
              Get Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
