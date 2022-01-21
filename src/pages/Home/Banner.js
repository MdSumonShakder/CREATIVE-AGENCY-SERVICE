import React from "react";

const Banner = () => {
  return (
    <>
      <div id="banner" className="pt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row mx-auto">
                <div className="col-md-6 col-10 mx-auto">
                  <div className=" mt-5">
                    <h1 className="fw-bolder mb-3">
                      Let's Grow Your <br /> Brands To The <br /> Next Level
                    </h1>
                    <small className=" text-justify">
                      If your company hopes to grow it's business, you need
                      <br />
                      more than just a good idea. Its great if you have
                      <br /> a product or service that everybody <br /> wants.
                      But don't know about it.
                    </small>
                    <br />
                    <button className=" mb-5 mt-4">Hire us</button>
                  </div>
                </div>
                <div className="col-md-6 col-10 mx-auto">
                  <div>
                    <img
                      src="/images/logo.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
