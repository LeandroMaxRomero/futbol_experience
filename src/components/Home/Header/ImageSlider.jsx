import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import "animate.css";

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setInterval(() => {
      goToNext();
    }, 4000);
  });

  return (
    <>
      <img
        src={slides[currentIndex].url}
        alt="Imagen Header"
        // className={"animate__animated animate__infinite imagen-fondo-header"}
        className={"imagen-fondo-header"}
      />
    </>
  );
};
ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
