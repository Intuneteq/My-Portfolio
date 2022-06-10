import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Rings } from "react-loader-spinner";

import AppWrapper from "../../Wrapper/AppWrapper";
import { urlFor, client } from "../../client";
import MotionWrap from "../../Wrapper/MotionWrap";
import "./Testimonials.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonial = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      console.log(data);
      setIsLoading(false);
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      console.log(data);
      setIsLoading(false);
      setBrands(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Testimonials<span> & </span>Brands
      </h2>
      {isLoading ? (
        <div className="head-text Rings">
          <Rings color="#9ee08f" height={80} width={80} />
        </div>
      ) : (
        <>
          {testimonials.length && (
            <div className="app__testimonial-container">
              <div className="app__testimonial-item app__flex">
                <img src={urlFor(testimonial.imageurl)} alt="testimonial" />
                <div className="app__testimonials-content">
                  <p className="p-text">{testimonial.feedback}</p>
                  <div>
                    <h4 className="bold-text">{testimonial.name}</h4>
                    <h5 className="p-text">{testimonial.company}</h5>
                  </div>
                </div>
              </div>

              <div className="app__testimonial-btns app__flex">
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      currentIndex === 0
                        ? testimonials.length - 1
                        : currentIndex - 1
                    )
                  }
                >
                  <HiChevronLeft />
                </div>
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      currentIndex === testimonials.length - 1
                        ? 0
                        : currentIndex + 1
                    )
                  }
                >
                  <HiChevronRight />
                </div>
              </div>
            </div>
          )}

          <div className="app__brands app__flex">
            {brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                key={brand._id}
              >
                <img src={urlFor(brand.imgUrl)} alt={brand.name} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AppWrapper(
  MotionWrap(Testimonials, "app__testimonials"),
  "testimonials"
);
