import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Page/Layout/Layout";
import Home from "../Page/Home/Home";
import Dashboard from "../Page/Dashboard/Dashboard";
import NoMatch from "../Page/NoMatch/NoMatch";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
