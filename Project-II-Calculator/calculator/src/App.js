import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionBtn from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="siteWrap">
      <h1>Testing</h1>
      <div className="box__container">
        <CalculatorDisplay ph={"0"} />
        <div className="split">
          <ActionBtn name={"clear"} />
          <NumberButton num={"/"} display={"operator btn"} />
        </div>
        <div className="area">
          <NumberButton num={7} display="btn" />
          <NumberButton num={8} display="btn" />
          <NumberButton num={9} display="btn" />
          <NumberButton num={"x"} display={"operator btn"} />
        </div>
        <div className="area">
          <NumberButton num={4} display="btn" />
          <NumberButton num={5} display="btn" />
          <NumberButton num={6} display="btn" />
          <NumberButton num={"+"} display={"operator btn"} />
        </div>
        <div className="area">
          <NumberButton num={1} display="btn" />
          <NumberButton num={2} display="btn" />
          <NumberButton num={3} display="btn" />
          <NumberButton num={"-"} display={"operator btn"} />
        </div>
        <div className="split">
          <ActionBtn name={0} />
          <NumberButton num={"="} display={"operator btn"} />
        </div>
      </div>
    </div>
  );
};

export default App;
