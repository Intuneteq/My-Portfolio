import React from "react";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLists = [
    "home",
    "about",
    "work",
    "skills",
    "testimonials",
    "contact",
  ];

  return (
    <nav className="app__nav">
      <div className="app__nav-logo">
        <h1>TOBI OLANITORI</h1>
      </div>
      <ul className="app__nav-list">
        {navLists.map((list) => (
          <li className="app__flex p-text" key={`${list}-link`}>
            <a href={`#${list}`}>{list}</a>
          </li>
        ))}
      </ul>

      <div className="app__nav-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [150, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLists.map((list) => (
                <li key={list}>
                  <a href={`#${list}`} onClick={() => setToggle(false)}>
                    {" "}
                    {list}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
