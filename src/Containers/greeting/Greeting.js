import React from "react";
import "./Greeting.css";
import { greeting } from "../../data";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import FeelingProud from "../../assets/avatar_svg/FeelingProud";
import { style } from "glamor";
import { TypeAnimation } from 'react-type-animation';

export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();
  let typeanim =greeting.typer;
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
   
  });
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <span>I'M </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                <TypeAnimation    
                  sequence={[typeanim, 1,]}
                  repeat={0}
                  wrapper="h2"
                />
              </p>
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
