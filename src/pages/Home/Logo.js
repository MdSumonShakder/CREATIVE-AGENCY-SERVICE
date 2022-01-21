import React from "react";

const Logo = () => {
  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row justify-content-center align-items-center w-75 mx-auto">
                <div className="col-md-2 col-10 mx-auto">
                  <img
                    src="/images/slack.png"
                    alt="images"
                    className=" text-dark img-fluid"
                  />
                </div>
                <div className="col-md-2 col-10 mx-auto">
                  <img
                    src="/images/uber.png"
                    alt="images"
                    className=" text-dark img-fluid"
                  />
                </div>
                <div className="col-md-2 col-10 mx-auto">
                  <img
                    src="/images/netflix.png"
                    alt="images"
                    className=" text-dark img-fluid"
                  />
                </div>
                <div className="col-md-2 col-10 mx-auto">
                  <img
                    src="/images/airbnb.png"
                    alt="images"
                    className=" text-dark img-fluid"
                  />
                </div>
                <div className="col-md-2 col-10 mx-auto">
                  <img
                    src="/images/google.png"
                    alt="images"
                    className=" text-dark img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
