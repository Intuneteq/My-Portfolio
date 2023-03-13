import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import { Images } from "../../Constants";
import "./Footer.scss";
import AppWrapper from "../../Wrapper/AppWrapper";
import MotionWrap from "../../Wrapper/MotionWrap";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useRef();

  const submitMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xa4foni",
        "template_bdus6r4",
        form.current,
        "_kSBmwwZVmznIa1Zd"
      )
      .then(
        (result) => {
          setIsFormSubmitted(true);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <>
      <div className="app__flex">
        <h2 className="section-text">
          Reach out to me, let's discuss your next project
        </h2>
      </div>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Images.email} alt="email" />
          <a href="mailto:Tobiolanitori@gmail.com" className="p-text">
            Tobiolanitori@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="mobile" />
          <a href="tel: +2348148890628" className="p-text">
            +2348148809628
          </a>
        </div>
      </div>

      <div className="mobile-socials app__flex">
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

      {!isFormSubmitted ? (
        <form
          ref={form}
          action="submit"
          onSubmit={submitMessage}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="user_name"
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Email"
              name="user_email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>

          <button className="p-text" type="submit">
            Send Message
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for contacting me</h3>
        </div>
      )}
    </>
  );
};

export default AppWrapper(MotionWrap(Footer, "app__footer"), "contact");
