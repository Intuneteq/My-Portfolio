import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Images } from "../../Constants";
import "./Footer.scss";
import AppWrapper from "../../Wrapper/AppWrapper";
import MotionWrap from "../../Wrapper/MotionWrap";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useRef();

  const submitMessage = (e) => {
    e.preventDefault();

    console.log("formData", form);

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
          console.log("form", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Reach Out & Chat with me</h2>

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

export default AppWrapper(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
