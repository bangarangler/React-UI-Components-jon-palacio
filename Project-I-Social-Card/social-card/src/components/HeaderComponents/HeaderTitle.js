import React from "react";
import "./Header.css";

function HeaderTitle() {
  //const ts = new Date.now().toDateString();
  //let now = ts.toDateString();
  return (
    <div className="headerTitle">
      <h4>Lambda School</h4>
      <p>@LambdaSchool 26 jan</p>
    </div>
  );
}

export default HeaderTitle;
