import React from "react";
import "./cloud.css";
import { Fade } from "react-reveal";
import Cloudimg from "../../assets/cloud"
import { cloudData } from "../../data";
import Skillcard from "../../Components/skillcard/skillcard";
function Cloud(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      
      <div>
      {cloudData.data.map((cloudData, index) => {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {cloudData.title}
                  </h1>
                </Fade>
              
                <Fade left duration={2000}>
                  <div>
                  <Skillcard theme={theme} />
                    {cloudData.technologies.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="skills-image-div">
                <Cloudimg theme={theme} />
                </div>
              </Fade>
            </div>
          );
        }
      )}
    </div>
    </div>
  );
}

export default Cloud;