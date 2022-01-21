import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Client = () => {
  return (
    <>
      <div id="client" className="pt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2 className="text-center mt-5">
                Clients<span> Feedback</span>
              </h2>
              <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="mt-5 w-100 p-2 mb-5">
                    <Card className="p-4">
                      <div className=" w-100 h-75 d-flex align-items-center">
                        <img
                          className="w-25 h-50 img-fluid mb-2"
                          src="/images/customer-1.png"
                          alt="images"
                        />
                        <div className="mx-3">
                          <h6>Nishe Pritack</h6>
                          <small>CEO.Manpol</small>
                        </div>
                      </div>
                      <div>
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Purus commodo ipsum duis laoreet
                          maecenas(Feugiat).
                        </small>
                        <br />
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="mt-5 w-100 p-2 mb-5">
                    <Card className="p-4 border-0 shadow-lg">
                      <div className=" w-100 h-75 d-flex align-items-center">
                        <img
                          className="w-25 h-50 img-fluid  mb-2"
                          src="/images/customer-2.png"
                          alt="images"
                        />
                        <div className="mx-3">
                          <h6>Bria Malone</h6>
                          <small>CEO.Manpol</small>
                        </div>
                      </div>
                      <div>
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Purus commodo ipsum duis laoreet
                          maecenas(Feugiat).
                        </small>
                        <br />
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="mt-5 w-100 p-2 mb-5">
                    <Card className="p-4">
                      <div className=" w-100 h-75 d-flex align-items-center">
                        <img
                          className="w-25 h-50 img-fluid  mb-2"
                          src="/images/customer-3.png"
                          alt="images"
                        />
                        <div className="mx-3">
                          <h6>Bria Malone</h6>
                          <small>CEO.Manpol</small>
                        </div>
                      </div>
                      <div>
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Purus commodo ipsum duis laoreet
                          maecenas(Feugiat).
                        </small>
                        <br />
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
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

export default Client;
