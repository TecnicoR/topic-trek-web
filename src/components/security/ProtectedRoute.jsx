import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user != null) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
