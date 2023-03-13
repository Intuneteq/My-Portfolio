import React from "react";
import { motion } from "framer-motion";

import { Images } from "../../Constants";
import AppWrapper from "../../Wrapper/AppWrapper";
import CV from "../../assets/CV.pdf";
import "./Header.scss";

const Header = () => {
  const scaleVariant = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__header">
      <div className="app__header-1 app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-detail">
            <div className="detail-head app__flex">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">
                Tobi
                <br />
                Olanitori
              </h1>
            </div>

            <div className="detail-job app__flex">
              <p className="p-text">FULLSTACK WEB DEVELOPER</p>
              <p className="p-text">COMPUTER ENGINEER</p>
            </div>

            <div className="cv-job app__flex">
              <p>
                <a href={CV} download className="p-text">
                  Download My CV
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={Images.profile} alt="profile" />
        </motion.div>
      </div>

      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-skills"
      >
        {[Images.javascript, Images.PHP].map((skill, index) => (
          <div className="skill-cmp app__flex" key={`skill-${index}`}>
            <img src={skill} alt="skill" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, "home");
