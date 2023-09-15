import React, { useState } from "react";
import Input from "../Input/Input";

const DetailsEdit = (props) => {
  const { employeeDetails, sendProduct } = props;

  const [product, setProduct] = useState(employeeDetails[0]);
  const currentValue = (val, type) => {
    console.log(val);
    setProduct({ ...product, [type]: val });
  };

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <h1>{}</h1>
        <div>
          <div
            style={{
              display: "flex",
              margin: "10px 20px",
              borderBottom: "2px dotted #ccc",
              paddingBottom: "10px",
            }}
          >
            <div>
              <h3>{product.title}</h3>
              <div>
                <Input
                  value={product.title}
                  currentValue={(val) => currentValue(val, "title")}
                />
              </div>
              <i>{product.description}</i>
              <div>
                <Input
                  value={product.description}
                  currentValue={(val) => currentValue(val, "description")}
                />
              </div>
              <p>{product.category}</p>
              <div>
                <Input
                  value={product.category}
                  currentValue={(val) => currentValue(val, "category")}
                />
              </div>
              <h5>Rating</h5>
              <p>
                {product.rating.rate} - {product.rating.count}
              </p>
              <strong>Price - {product.price}$</strong>
              <div>
                <Input
                  value={product.price}
                  currentValue={(val) => currentValue(val, "price")}
                />
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => sendProduct(product)}>Save</button>
      </div>
    </div>
  );
};

export default DetailsEdit;
