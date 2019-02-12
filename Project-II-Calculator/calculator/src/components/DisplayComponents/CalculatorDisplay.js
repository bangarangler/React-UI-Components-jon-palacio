import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div>
      <div className="displayNum">
        <p>{props.ph}</p>
      </div>
    </div>
  );
};

export default CalculatorDisplay;
