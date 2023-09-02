import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "../../Routes/MainRoutes";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default AppWrapper;
