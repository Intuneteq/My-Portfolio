import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/intunedaplug/"
          className="link"
        >
          <div>
          <BsTwitter />
          </div>
        </a>
      
      <div>
        <a
          href="http://linkedin.com/in/tobi-olanitori-695884211"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Intuneteq"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
