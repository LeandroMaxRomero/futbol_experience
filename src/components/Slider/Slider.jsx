import { useState } from "react";

export const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <div className="leftArrow" onClick={prevSlide}>
        &#10092;
      </div>
      {data.map((item, idx) => {
        return (
          <>
            <img
              src={item.url}
              alt={item.name}
              key={idx}
              className={slide === idx ? "myslide" : "myslide myslide-hidden"}
            />

            <img
              src={item.url}
              alt={item.name}
              key={idx}
              className="img-mobile"
            />
          </>
        );
      })}

      <div className="rightArrow" onClick={nextSlide}>
        &#10093;
      </div>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
