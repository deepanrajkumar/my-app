import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "../../Routes/MainRoutes";
import { ProductProvider } from "../../Context/ProductContext";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <MainRoutes />
      </ProductProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;
