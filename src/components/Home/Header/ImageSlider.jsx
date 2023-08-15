
import PropTypes from "prop-types";
import { useState } from "react";

export const ImageSlider = ({slides}) => {
    const [currentIndex, setCurretIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurretIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurretIndex(newIndex);
    }
    const goToSlide = slideIndex => {
        setCurretIndex(slideIndex);
    }
  return (
    <>
        <div className="arrow left" onClick={goToPrevious}>&#10094;</div>

        <img src={slides[currentIndex].url} alt="Imagen Header" className="imagen-fondo-header"/>

        <div className="arrow right" onClick={goToNext}>&#10095;</div>

        <div className="contenedor-puntos">{slides.map((slide, slideIndex)=> (
            <div key={slideIndex} className="punto-carrusel" onClick={()=>goToSlide(slideIndex)}>&#10625;</div>
        ))}</div>
    </>
  )
};
ImageSlider.propTypes = {
    slides: PropTypes.node.isRequired,
}