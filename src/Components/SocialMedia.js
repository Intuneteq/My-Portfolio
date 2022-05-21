import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <AiFillGithub />
      </div>
    </div>
  );
};

export default SocialMedia;
