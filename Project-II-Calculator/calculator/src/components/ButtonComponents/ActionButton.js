import React from "react";
import "./Button.css";

const ActionBtn = props => {
  return (
    <div>
      <button className="actBtn">{props.name}</button>
    </div>
  );
};

export default ActionBtn;
