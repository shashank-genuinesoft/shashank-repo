import React from "react";
import avatardark from "./avatar_svg/cloudnew.svg"
import avatarlight from "./avatar_svg/cloudnew.svg"
import "./avatar_svg/avatar.css"



function Cloudimg(props) {
    if (props.theme.name == "light")
        return (
        <img src={avatarlight} className="center"></img> 
        );
    else if (props.theme.name === "dark")
    return <img src={avatardark} className="center"></img>;
}
export default Cloudimg;
