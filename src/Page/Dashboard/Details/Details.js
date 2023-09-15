import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../../Context/ProductContext";
import TestComp from "../../../TestComp/TestComp";

const Details = () => {
  const { productDetails } = useContext(ProductContext);
  const params = useParams();
  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    console.log("Params", params);
    console.log("productDetails", productDetails);

    setCurrentProduct(
      productDetails.filter((pro) => pro.id.toString() === params.id)
    );
  }, [params, productDetails]);

  return (
    <div>
      <div>Clothing details</div>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      {currentProduct.length && <TestComp employeeDetails={currentProduct} />}
    </div>
  );
};

export default Details;
