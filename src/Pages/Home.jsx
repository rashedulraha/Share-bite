import React from "react";

import Container from "../Components/Responsive/Container";
import HowItWorks from "../Components/Ui/HowItWorks";
import OurMission from "../Components/Ui/OurMission";

const Home = () => {
  return (
    <div>
      <Container>
        <h1>Home</h1>
      </Container>
      <HowItWorks />
      <OurMission />
    </div>
  );
};

export default Home;
