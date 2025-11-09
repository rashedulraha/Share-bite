import React, { useContext } from "react";
import Container from "../Components/Responsive/Container";
import AuthContext from "../Contaxt/AuthContext";
import { BarLoader } from "react-spinners";

const AvailableFoods = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center  h-screen z-50 absolute top-0 inset-0 bg-base-200">
        <BarLoader color="#0ea5e9" />
      </div>
    );
  }
  return (
    <div>
      <Container>
        <h1>Available foods </h1>
      </Container>
    </div>
  );
};

export default AvailableFoods;
