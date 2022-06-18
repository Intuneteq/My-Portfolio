import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";

import AppWrapper from "../../Wrapper/AppWrapper";
import MotionWrap from "../../Wrapper/MotionWrap";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      console.log(data);
      setIsLoading(false);
      setAbouts(data);
    });
  }, []);

  return (
    <div className="app__abouts">
      <h1 className="head-text">
        SERVICES <span>I CAN </span>HELP <span>You</span> WITH
      </h1>

      {isLoading ? (
        <div className="head-text Rings">
          <Rings color="#9ee08f" height={80} width={80} />
        </div>
      ) : (
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profiles-about"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt="sanity" />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppWrapper(
  MotionWrap(About, "app__abouts"),
  "about",
  "app__whitebg"
);
