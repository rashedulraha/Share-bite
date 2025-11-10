import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";
import AuthContext from "../../Context/AuthContext";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{children}</>;
};

export default PrivetRoutes;
