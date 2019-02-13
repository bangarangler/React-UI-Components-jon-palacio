import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={faComment} />
      <FontAwesomeIcon icon={faSyncAlt} />
      <span>6</span>
      <FontAwesomeIcon icon={faHeart} />
      <span>4</span>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
}

export default Footer;
