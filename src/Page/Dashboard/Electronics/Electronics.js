import React, { useContext } from "react";
import ErrorMain from "../../../Components/Error/ErrorMain";
import LoaderMain from "../../../Components/Loader/LoaderMain";
import TestComp from "../../../TestComp/TestComp";
import { ProductContext } from "../../../Context/ProductContext";

const Electronics = () => {
  const { productDetails, loading, error, cartCount, productId, sendProduct } =
    useContext(ProductContext);

  return (
    <div>
      {error && <ErrorMain />}
      {loading && <LoaderMain />}
      <div>
        My Cart - {cartCount.length} - {productId} - {JSON.stringify(cartCount)}
      </div>
      {!error && !loading && (
        <TestComp employeeDetails={productDetails} sendProduct={sendProduct} />
      )}
    </div>
  );
};

export default Electronics;
