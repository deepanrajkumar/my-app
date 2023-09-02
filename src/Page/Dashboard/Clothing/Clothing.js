import React, { useState, useEffect } from "react";
import { fetchData } from "../../../Api/EmployeeDetailsApi";
import ErrorMain from "../../../Components/Error/ErrorMain";
import LoaderMain from "../../../Components/Loader/LoaderMain";
import TestComp from "../../../TestComp/TestComp";

function Clothing() {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cartCount, setCartCount] = useState([]);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    // fetchData("https://fakestoreapi.com/products")
    fetchData("http://localhost:3004/products")
      .then((result) => {
        if (result) {
          setEmployeeDetails(result);
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
    <div>
      {error && <ErrorMain />}
      {loading && <LoaderMain />}
      <div>
        My Cart - {cartCount.length} - {productId} - {JSON.stringify(cartCount)}
      </div>
      {!error && !loading && (
        <TestComp employeeDetails={employeeDetails} sendProduct={sendProduct} />
      )}
    </div>
  );
}

export default Clothing;
