import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { Rings } from "react-loader-spinner";

import AppWrapper from "../../Wrapper/AppWrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import MotionWrap from "../../Wrapper/MotionWrap";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "skills"] | order(number asc)';
    const experiencesQuery = '*[_type == "experiences"] | order(year asc)';

    client.fetch(query).then((data) => {
      setIsLoading(false);
      setSkills(data);
    });

    client.fetch(experiencesQuery).then((data) => {
      setIsLoading(false);
      setExperiences(data);
    });
  }, []);
  return (
    <>
      <div className="app__flex">
      <h2 className="section-text">
        Tech Stack <span> & </span>Experience
      </h2>
      </div>

      {isLoading ? (
        <div className="head-text Rings">
          <Rings color="#9ee08f" height={80} width={80} />
        </div>
      ) : (
        <div className="app-skills-container">
          <motion.div className="app__skills-list">
            {skills.map((skill, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={index}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="app__skills-exp">
            {experiences.map((experience, index) => (
              // <>
                <motion.div
                  className="app__skills-exp-item"
                  key={experience.year}
                >
                  <div className="app__skills-exp-year">
                    <p className="bold-text">{experience.year}</p>
                  </div>

                  <motion.div className="app__skills-exp-works">
                    {experience?.works?.map((work, index) => (
                      <div  key={index}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={work.name}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>

                        <ReactTooltip
                          id={work.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {work.desc}
                        </ReactTooltip>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              // </>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default AppWrapper(
  MotionWrap(Skills, "app__skills"),
  "skills"
);
