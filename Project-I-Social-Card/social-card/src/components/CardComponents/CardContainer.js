import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

import { MyBtn, CardContainerStyle } from "../../styles";

function CardContainer() {
  return (
    <MyBtn href="google.com">
      <CardContainerStyle className="cardContainer">
        <div className="alignRght">
          <CardBanner />
          <CardContent />
        </div>
      </CardContainerStyle>
    </MyBtn>
  );
}

export default CardContainer;
