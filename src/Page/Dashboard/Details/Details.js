import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../../Context/ProductContext";
import TestComp from "../../../TestComp/TestComp";
import DetailsEdit from "../../../Components/DetailsEdit/DetailsEdit";

const Details = () => {
  const { productDetails } = useContext(ProductContext);
  const params = useParams();
  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (params?.id && productDetails.length) {
      setCurrentProduct(
        productDetails.filter((pro) => pro.id.toString() === params.id)
      );
    }
  }, [params, productDetails]);

  return (
    <div>
      <div>Clothing details</div>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      {currentProduct.length && <TestComp employeeDetails={currentProduct} />}
      <div>
        <button onClick={() => setEdit(!edit)}>
          {edit ? "Complete" : "Edit"}
        </button>
      </div>
      {edit && (
        <DetailsEdit
          employeeDetails={currentProduct}
          sendProduct={(prod) => setCurrentProduct([prod])}
        />
      )}
    </div>
  );
};

export default Details;
