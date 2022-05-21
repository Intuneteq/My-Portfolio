import React, { useState } from "react";
import { motion } from "framer-motion";

import { Images } from "../../Constants";
import "./Footer.scss";
import AppWrapper from "../../Wrapper/AppWrapper";
import { client } from "../../client";
import MotionWrap from "../../Wrapper/MotionWrap";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
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
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              value={message}
              placeholder="Your Message"
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          
          <button
            type="button"
            className="p-text"
            onClick={handleSendMessage}
          >
            Send Message
          </button>

        </div>
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
