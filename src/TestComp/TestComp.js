import React from "react";
import { useNavigate } from "react-router-dom";

const TestComp = (props) => {
  const { employeeDetails, sendProduct } = props;
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "left" }}>
      <div>
        {employeeDetails.map((details) => (
          <div
            key={details.id}
            style={{
              display: "flex",
              margin: "10px 20px",
              borderBottom: "2px dotted #ccc",
              paddingBottom: "10px",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "5px",
                margin: "10px 20px",
              }}
            >
              <img src={details.image} alt={details.title} width={200} />
            </div>
            <div>
              <h3>{details.title}</h3>
              <i>{details.description}</i>
              <p>{details.category}</p>
              <h5>Rating</h5>
              <p>
                {details.rating.rate} - {details.rating.count}
              </p>
              <strong>Price - {details.price}$</strong>

              {sendProduct && (
                <>
                  <button onClick={() => sendProduct(details.id)}>
                    Add to Cart
                  </button>

                  <button onClick={() => navigate(`/dashboard/${details.id}`)}>
                    More details - {details.id}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestComp;
