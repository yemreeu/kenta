import React, { useState, useEffect, useRef } from "react";
import './styles.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef();

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(nextSlide, 2500); // Change slide every 3 seconds
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [autoplay, slide]);

  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BsArrowLeftCircleFill
        className="arrow arrowLeft"
        onClick={previousSlide}
      />

      {data.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={`${slide === index ? "slides" : "slides slidesHidden"}`}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrowRight"
        onClick={nextSlide}
      />

      <span className="indicators">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`indicator ${
              slide === index ? "" : "indicatorInactive"
            }`}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;
