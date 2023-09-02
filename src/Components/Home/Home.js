import React from "react";
import PropTypes from "prop-types";
import TestComp from "../../TestComp/TestComp";

const Home = ({ employeeDetails }) => {
  const getData = (data, add) => {
    console.log("MyData", data, add);
  };
  return (
    <div>
      <div className="App">
        <TestComp
          deepan="deepan"
          employeeDetails={employeeDetails}
          giveData={getData}
        />
      </div>
    </div>
  );
};

Home.propTypes = {
  deepan: PropTypes.string,
  employeeDetails: PropTypes.shape([
    {
      "ID Nation": PropTypes.string,
      Nation: PropTypes.string,
      "ID Year": PropTypes.number,
      Year: PropTypes.string,
      Population: PropTypes.number,
      "Slug Nation": PropTypes.string,
    },
  ]),
};

export default Home;
