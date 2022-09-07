import React from "react";
import heroku from "../../assets/logo/icon.png"
import godaddy from "../../assets/logo/GoDaddy-Logo.png"
import "./skillcard.css"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function Skillcard(props) {
  return(
  <div className="maindiv">
     <OverlayTrigger
      placement="top"
    overlay={<Tooltip  id="tooltip">Heroku</Tooltip>}
    >
<img className="cardItem1" src={heroku}  alt="heroku"></img>
</OverlayTrigger>
<img className="cardItem" src={godaddy}  alt="heroku"></img>
      
   </div>
   );
}
export default Skillcard;
