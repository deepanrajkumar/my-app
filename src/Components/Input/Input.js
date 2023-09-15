import React, { useState } from "react";

const Input = ({ value, currentValue }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          currentValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
