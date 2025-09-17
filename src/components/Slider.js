import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideInterval, setSlideInterval] = useState(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Flutter Development",
      description: "Creating beautiful cross-platform applications with Flutter"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "React Native Expertise",
      description: "Building performant mobile apps with React Native"
    },
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Web Applications",
      description: "Developing responsive and interactive web apps"
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const startSlideShow = () => {
    const interval = setInterval(nextSlide, 5000);
    setSlideInterval(interval);
  };

  const stopSlideShow = () => {
    clearInterval(slideInterval);
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  return (
    <div className="image-slider">
      <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-slide" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="slider-content">
              <h3 className="slider-title">{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
     
      <div className="slider-arrow prev" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="slider-arrow next" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </div>
     
      <div className="slider-nav">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;