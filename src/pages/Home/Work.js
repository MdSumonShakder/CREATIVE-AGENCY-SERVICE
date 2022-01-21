import React from "react";
import { Carousel } from "react-bootstrap";

const Work = () => {
  return (
    <>
      <div id="work" className="mb-5 mt-5">
        <div className="container">
          <h2 className="text-center text-white pt-5">
            Here are some of <span>our works</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-4 col-10 mx-auto mb-5 mt-5">
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src="/images/carousel-1.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md-6 col-lg-4 col-10 mx-auto mb-5 mt-5">
                <Carousel>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src="/images/carousel-2.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md-6 col-lg-4 col-10 mx-auto mb-5 mt-5">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 img-fluid"
                      src="/images/carousel-4.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
