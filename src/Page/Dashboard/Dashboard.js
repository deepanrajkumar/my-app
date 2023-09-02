import React from "react";
import { Outlet, Link } from "react-router-dom";
import ProductRoutes from "../../Routes/ProductRoutes";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="clothing">Clothing</Link>
          </li>
          <li>
            <Link to="electronics">electronics</Link>
          </li>
        </ul>
      </nav>
      <ProductRoutes />
      <Outlet />
    </div>
  );
};

export default Dashboard;
