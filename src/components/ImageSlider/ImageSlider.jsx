import React, { useState, useEffect } from 'react';
import styleCSS from './ImageSlider.module.css';

const ImageSlider = (props) => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % props.data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styleCSS.gridServiceItem}>
    <div className={styleCSS.serviceItem}>
      <img className={styleCSS.imgItem} src={props.data[currentImage].imgSrc} alt={`Image ${currentImage}`} />
      {<div className={styleCSS.desriptionItem}>
        <div className={styleCSS.desriptionContents}>
          <h2>
            {props.data[currentImage].description}
            <button className={styleCSS.button} onClick={() => scrollToSection('contact')}>CONTACT US</button>
          </h2>
        </div>
      </div> }
    </div>
    </section>
  );
};

export default ImageSlider;