import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slide1 from '../components/slides/Slide1';
import Slide2 from '../components/slides/Slide2';
import Slide3 from '../components/slides/Slide3';
import Slide4 from '../components/slides/Slide4';
import Slide5 from '../components/slides/Slide5';
import Slide6 from '../components/slides/Slide6';

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < 6) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      navigate('/preview'); // Navigate to the preview page after the last slide
    }
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1 onNext={handleNext} />;
      case 2:
        return <Slide2 onNext={handleNext} />;
      case 3:
        return <Slide3 onNext={handleNext} />;
      case 4:
        return <Slide4 onNext={handleNext} />;
      case 5:
        return <Slide5 onNext={handleNext} />;
      case 6:
        return <Slide6 onNext={handleNext} />;
      default:
        return null;
    }
  };

  return <div>{renderSlide()}</div>;
};

export default Slides;
