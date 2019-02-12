import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div>
      <button className={props.btn + " " + props.display}>{props.num}</button>
    </div>
  );
};

export default NumberButton;
