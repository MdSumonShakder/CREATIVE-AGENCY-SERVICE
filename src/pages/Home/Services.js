import React from "react";
import { Card } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <div id="services" className="pt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2 className="text-center mt-5">
                Provide awesome <span>Services</span>
              </h2>
              <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mt-5 w-100 p-2">
                    <Card className="p-4 border-0 shadow-lg">
                      <Card.Img
                        className="img-fluid w-25 mx-auto mb-3"
                        variant="top"
                        src="/images/service2.png"
                      />
                      <Card.Body className=" text-center">
                        <Card.Title>
                          <h6>Graphic Design</h6>
                        </Card.Title>
                        <small>
                          Graphic design is a craft where professionals create
                          to optimize the user experience.
                        </small>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mt-5 w-100 p-2">
                    <Card className="p-4 border-0 shadow-lg ">
                      <Card.Img
                        className="img-fluid w-25 mx-auto mb-3"
                        variant="top"
                        src="/images/service1.png"
                      />
                      <Card.Body className=" text-center">
                        <Card.Title>
                          <h6>Web & Mobile Design</h6>
                        </Card.Title>
                        <small>
                          Mobile-first design.designers tend to follow a
                          mobile-first approach designers tend to in design.
                        </small>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mt-5 w-100 p-2">
                    <Card className="p-4 border-0  shadow-lg">
                      <Card.Img
                        className="img-fluid w-25 mx-auto mb-3"
                        variant="top"
                        src="/images/service3.png"
                      />
                      <Card.Body className=" text-center">
                        <Card.Title>
                          <h6>Web Development</h6>
                        </Card.Title>
                        <small>
                          Web development single static page of plain to complex
                          web applications, and social network services.
                        </small>
                      </Card.Body>
                    </Card>
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

export default Services;
