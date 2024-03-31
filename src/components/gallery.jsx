import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Partners</h2>
          <p>
          These are the esteemed partners with whom we have successfully collaborated.
          </p>
          <p>
          Best Western Logistics is proud to collaborate with a network of trusted partners who share our values and commitment to excellence. Through strategic partnerships, we ensure seamless operations, expanded service offerings, and enhanced customer satisfaction. These partners represent a diverse range of industries and have played a pivotal role in our success.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 img-partnerts"
                  >
                    <Image className='m-2'
                      title={d.title}
                      // largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
