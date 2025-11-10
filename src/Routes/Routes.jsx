import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Forgot from "../Pages/Forgot";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import PrivetRoutes from "../Components/PrivetRoutes/PrivetRoutes";
import MyRequests from "../Pages/MyRequests";
import MyListings from "../Pages/MyListings";
import NotFound from "../Pages/NotFound";
import FoodDetails from "../Pages/FoodDetails";
import About from "../Pages/About";
import DonorProfile from "../Pages/DonorProfile";
import UserProfile from "../Pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "/available-foods", Component: AvailableFoods },
      {
        path: "/add-food",
        element: (
          <PrivetRoutes>
            <AddFood />
          </PrivetRoutes>
        ),
      },
      {
        path: "/user-profile",
        element: (
          <PrivetRoutes>
            <UserProfile />
          </PrivetRoutes>
        ),
      },
      {
        path: "/my-request",
        element: (
          <PrivetRoutes>
            <MyRequests />
          </PrivetRoutes>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivetRoutes>
            <MyListings />
          </PrivetRoutes>
        ),
      },
      {
        path: "/details-page/:id",
        element: (
          <PrivetRoutes>
            <FoodDetails />
          </PrivetRoutes>
        ),
      },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      { path: "forgot-password", Component: Forgot },
      { path: "about", Component: About },
      { path: "donor-profile/:id", Component: DonorProfile },
    ],
  },
]);

export default router;
