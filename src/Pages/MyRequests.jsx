import { useContext, useEffect, useState } from "react";
import Container from "../Components/Responsive/Container";
import useAxios from "../Hooks/useAxios";
import AuthContext from "../Context/AuthContext";

const MyRequests = () => {
  const { user } = useContext(AuthContext);
  const { foodCardData, dataFetchLoading } = useAxios(
    "http://localhost:3000/request-food"
  );
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    if (foodCardData && user?.email) {
      const filterFoodData = foodCardData.filter(
        (food) => food?.donorEmail === user.email
      );
      setMyFoods(filterFoodData);
    }
  }, [foodCardData, user?.email]);

  console.log("My Foods:", myFoods);
  console.log("Loading:", dataFetchLoading);

  return (
    <div>
      <Container>
        <h1>My request</h1>
      </Container>
    </div>
  );
};

export default MyRequests;
