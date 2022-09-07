import React from "react";
import "./edu.css";
import IMG from "../assets/education.png"
function Edu(props) {
  const theme = props.theme;
  return (
   <img src={IMG} className="greet"></img>
  );
}

export default Edu;