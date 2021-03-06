import React, { useState } from "react";
import useAuth from "./../../Hooks/useAuth";
import { useNavigate, NavLink } from "react-router-dom";
import { Spinner, Alert, Button } from "react-bootstrap";

const Register = () => {
  const { user, registerUser, loading, error } = useAuth();
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      <Alert>Your Password did not Match!</Alert>;
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <>
      <div
        className="text-center pb-5 pt-4"
        style={{
          width: "100%",
          backgroundImage: `url('https://i.pinimg.com/originals/97/ef/71/97ef710873ee1bda4e7f9bb027c323f9.jpg')`,
          backgroundPasition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h3 className="text-white pb-2">Please Register</h3>

          {!loading && (
            <form onSubmit={handleLoginSubmit} className="contact-forms mb-4">
              <div className="col-md-6 d-block mx-auto">
                <input
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Full Name"
                />
              </div>
              <div className="col-md-6 d-block mx-auto">
                <input
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Email Address"
                />
              </div>
              <div className="col-md-6 d-block mx-auto">
                <input
                  type="number"
                  name="number"
                  onBlur={handleOnBlur}
                  placeholder="Phone Number"
                />
              </div>
              <div className="col-md-6 d-block mx-auto">
                <input
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="Password"
                />
              </div>
              <div className="col-md-6 d-block mx-auto">
                <input
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  placeholder="Confirm Password"
                />
              </div>
              <div className="col-md-6 d-block mx-auto">
                <div className="bannerText">
                  <button className="mb-3 fw-bolder" type="submit">
                    REGISTER
                  </button>
                </div>
              </div>
              <NavLink to="/login">
                <Button className="mb-3 fw-bolder bg-dark text-white border-0">
                  ALREADY REGISTERED ? PLEASE LOGIN
                </Button>
              </NavLink>
            </form>
          )}

          {loading && <Spinner animation="border" variant="danger" />}

          {user?.email && (
            <Alert
              className=" bg-white w-25 p-1 d-block mx-auto fw-bolder"
              variant="success"
            >
              Register Successfully!
            </Alert>
          )}
          {error && (
            <Alert
              className="bg-warning w-25 d-block mx-auto fw-bolder"
              variant="dark"
            >
              Firebase-Error:(Email-already-in-use !!! Please Login...)
            </Alert>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
