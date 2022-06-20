import React from "react";

const NavigationDots = ({ active }) => {
  const navLists = [
    "home",
    "about",
    "work",
    "skills",
    "testimonials",
    "contact",
  ];
  return (
    <div className="app__navigation">
      {navLists.map((list, index) => (
        <a
          href={`#${list}`}
          key={list + index}
          className="app__navigation-dot"
          style={active === list ? { backgroundColor: "#0D0D0D" } : {}}
        >
          {""}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
