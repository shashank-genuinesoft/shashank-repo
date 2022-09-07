import React, { useState } from "react";
import "./Splash.css";
import { Navigate  } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "./loading.json"
function AnimatedSplash(props) {
  const theme = props.theme;
    
  const style = ({
   
    color:props.theme.name === "light" ? "rgb(42 42 42)" : "#fff",
    backgroundColor:props.theme.name === "light" ? "rgb(239 239 239)" : "rgb(53 53 53)"
  });
  return (
    
      <div className="loading" style={style}>
      <Lottie className="loadinganim" animationData={loading} loop={true} />
      <h1 className="load">Loading ...</h1>
      
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? (
    <Navigate  to="/" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
