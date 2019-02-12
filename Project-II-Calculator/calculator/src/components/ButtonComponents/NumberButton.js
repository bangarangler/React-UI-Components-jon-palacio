import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div>
      <button className={props.display}>{props.num}</button>
    </div>
  );
};

export default NumberButton;

//const NumberButton = {obj} => {
//return (
//<button className={obj.btnName}></button>
//);
//}
