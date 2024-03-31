import React from "react";
import headerimg from '../assets/intro-bg.jpg'
export const Header = (props) => {
  return (
    <header id="header">
      <img className='headerimage' src={headerimg} alt='header image' />
      <a
        href="#contact"
        className="btn btn-custom btn-lg page-scroll getquotebtn"
      >
        Get Quote
      </a>{" "}
      {/* <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="headerIntrod">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className="headerIntrod">{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll getquotebtn"
                >
                  Get Quote
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};
