import React, { useState } from "react";
import useAuth from "./../../Hooks/useAuth";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, loading, error } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handelGoogleSignIn = (e) => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div
      className="text-center pb-5 pt-4"
      style={{
        width: "100%",
        backgroundImage: `url('https://static-cse.canva.com/blob/572026/removingbackgroundimages_Unsplash.jpeg')`,
        backgroundPasition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mb-5 pb-3">
        <h3 className="mt-5 text-white">Please Login</h3>

        {!loading && (
          <form
            className="contact-forms mt-5 mb-5"
            onSubmit={handleLoginSubmit}
          >
            <div className="col-md-6 d-block mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 d-block mx-auto">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
              <div>
                <button className="mb-5" type="submit">
                  LOGIN
                </button>
                <NavLink to="/register">
                  <h5 className="text-decoration-underline text-white">
                    NEW USER ? PLEASE REGISTER
                  </h5>
                </NavLink>
                <div className="fw-bolder text-danger">
                  -------------------------
                </div>
                <button onClick={handelGoogleSignIn}>GOOGLE SIGN IN</button>
              </div>
            </div>
          </form>
        )}

        {loading && <Spinner animation="border" variant="danger" />}
        {user?.email && (
          <Alert
            className="bg-white w-25 p-1 d-block mx-auto fw-bolder"
            variant="success"
          >
            Login Successfully!
          </Alert>
        )}

        {error && (
          <Alert
            className="bg-warning w-25 d-block mx-auto fw-bolder"
            variant="dark"
          >
            Firebase-Error: (Please Register!!! )
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Login;
