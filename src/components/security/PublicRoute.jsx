import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user != null) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
