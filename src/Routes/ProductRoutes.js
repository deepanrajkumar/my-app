import React from "react";
import { Routes, Route } from "react-router-dom";
import Clothing from "../Page/Dashboard/Clothing/Clothing";
import Electronics from "../Page/Dashboard/Electronics/Electronics";
import NoMatch from "../Page/NoMatch/NoMatch";

const ProductRoutes = () => {
  return (
    <Routes>
      <Route index path="/clothing" element={<Clothing />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default ProductRoutes;
