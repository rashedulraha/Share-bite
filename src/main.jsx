import "./index.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import router from "./Routes/Routes";

import { ToastContainer } from "react-toastify";
import AuthProvider from "./Context/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
