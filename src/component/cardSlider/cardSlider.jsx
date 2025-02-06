import React, { useState, useEffect } from 'react';
import './CardSlider.css';

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Adjust this number based on your total slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Slide every 2 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="slide">
        <h1 >Crop Yield Prediction</h1>
        <p>The team of Software Engineers has Developed Effective Techniques for Crop Yield
        Estimation using Machine learning Models</p>
        </div>
        <div className="slide"><h1>Sign Up Today</h1>
<p>By signing up and becoming an active member of our website, you will gain access to the latest and most up-to-date information.</p>
</div>
        <div className="slide"><h1>Sign In</h1>
<p>If you are a member, there may be new information available in your dashboard. We encourage you to check your dashboard every day for the latest updates. Additionally, remember to check your email for any important notifications.</p>
</div>
        <div className="slide"><h1>Productive Ethiopia</h1>
<p>Our goal is to integrate technology into the agricultural sector, empowering farmers to enhance their productivity and maximize their profits. By doing so, we aim to contribute to the economic growth of the country.</p>
</div>
      </div>
      <div className="indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
