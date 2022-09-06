import React from "react";
import laptop from "./laptopguy.svg"
import "./FeelingProud.css";

function FeelingProud(props) {
  const theme = props.theme;
  return (
<img src={laptop}></img> 
  );
}

export default FeelingProud;
