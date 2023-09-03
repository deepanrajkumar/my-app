// ProductContext.js

import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../Api/EmployeeDetailsApi";

// Create the ProductContext
const ProductContext = createContext();

// ProductProvider component
const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cartCount, setCartCount] = useState([]);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    // fetchData("https://fakestoreapi.com/products")
    fetchData("http://localhost:3004/products")
      .then((result) => {
        if (result) {
          setProductDetails(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  const sendProduct = (id) => {
    setProductId(id);
    setCartCount((oldCart) => [id, ...oldCart]);
  };

  return (
    <ProductContext.Provider
      value={{
        productDetails,
        loading,
        error,
        cartCount,
        productId,
        sendProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
