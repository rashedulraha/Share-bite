import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const useInformation = {
    name: "Rashedul islam",
  };
  return <AuthContext value={useInformation}>{children}</AuthContext>;
};

export default AuthProvider;
