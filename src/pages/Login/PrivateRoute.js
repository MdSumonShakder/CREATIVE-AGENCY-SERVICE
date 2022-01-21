import React from "react";
import useAuth from "./../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  let location = useLocation();
  if (loading) {
    return <Spinner animation="border" className=" d-block mx-auto mt-3"   variant="danger" />;
  }
  if (user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
