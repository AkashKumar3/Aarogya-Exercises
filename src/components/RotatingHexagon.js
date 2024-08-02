import React, { useEffect, useState } from 'react';
import './RotatingHexagon.css'; 
import arrow from '../assets/icons/down.svg'

const RotatingHexagon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRelative,setIsRelative] = useState(false)
  const [rotateX, setRotateX] = useState(0);
  const rotationDegrees = 300;

  useEffect(() => {
    const firstDiv = document.getElementById('first-div');
    const secondDiv = document.querySelector('.second');
    const thirdDiv = document.getElementById('third-div');

    function isFirstDivCompletelyOutOfView() {
      const rect = firstDiv.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      return rect.bottom < viewportHeight * 0.1;
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    const handleScroll = () => {
      const secondDivTop = secondDiv.getBoundingClientRect().top + window.scrollY;
      const secondDivHeight = secondDiv.offsetHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollFromTop = scrollTop - secondDivTop;
      const thirdDivTop = thirdDiv.getBoundingClientRect().top;

      if (isFirstDivCompletelyOutOfView() && isElementInViewport(secondDiv)) {
        setIsVisible(true);

        if (thirdDivTop > window.innerHeight) {
          let newRotateX = (scrollFromTop / (secondDivHeight - window.innerHeight)) * rotationDegrees;
          newRotateX = Math.min(newRotateX, rotationDegrees);
          setRotateX(newRotateX);
          setIsRelative(false)
        } else {
          setRotateX(rotationDegrees);
          setIsRelative(true)
        }
      } else {
        setIsVisible(false);
        setIsRelative(false)
        setRotateX(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotationDegrees]);

  const scrollToSecondDiv = () => {
    const secondDiv = document.querySelector('.second');
    if (secondDiv) {
      secondDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="first-div"></div>
      <div style={{width:'100vw',height:'30vh'}} className='down-arrow'>
        <div className='overdiv' onClick={scrollToSecondDiv}>
        <img src={arrow} alt="" className='downArrowImg'/>
        </div>
      
      </div>
      <div className="second">
        <div className={`container ${isVisible ? 'visible' : ''} ${isRelative ? 'relative':''}`} id="container">
          <div className="hexagon" id="hexagon" style={{ transform: `rotateX(${rotateX}deg)` }}>
            <div className="face">BEST</div>
            <div className="face">EXERCISES</div>
            <div className="face">AAROGYA</div>
            <div className="face">FROM</div>
            <div className="face">COMES</div>
            <div className="face">HEALTH</div>
          </div>
        </div>
      </div>
      <div id="third-div"></div>
    </>
  );
};

export default RotatingHexagon;
