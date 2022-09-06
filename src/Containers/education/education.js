import React from "react";
import Edu from "../../assets/edu";
import "./education.css";
import CertificationCard from "./CertificationCard";
import { certifications } from "../../data";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <Edu theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in hackathons and other tech-related
                activities. Below are some of my major certifications.
              </p>
            </div>
          </div>
        </Fade>
        <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Education
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.edu.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
      </div>
    </div>
  );
}

export default Education;