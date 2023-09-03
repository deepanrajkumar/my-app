import React, { useContext } from "react";
import { Outlet, Link, json } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

const Layout = () => {
  const { productDetails, loading, error, cartCount, productId } =
    useContext(ProductContext);

  return (
    <div>
      <header>
        <h1>Shopping</h1>
        <div>
          My Cart - {JSON.stringify([cartCount, productId], null, 2)}
          {/* {cartCount.length} - {productId} -{" "}
          {JSON.stringify(cartCount)} */}
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
