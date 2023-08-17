import { useState } from "react";
import { useModal } from "../hook/useModal";
import Modal from "../Modal/Modal";

export const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = (img) => {
    setModalContent(img);
    openModal();
  };

  return (
    <>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <img src={`${modalContent.url}`} alt={`${modalContent.name}`} />
      </Modal>
      <div className="carousel">
        <div className="leftArrow" onClick={prevSlide}>
          &#10092;
        </div>
        <>
          {data.map((item, idx) => {
            return (
              <img
                src={item.url}
                alt={item.name}
                key={idx}
                className={slide === idx ? "myslide" : "myslide myslide-hidden"}
              />
            );
          })}

          {data.map((item) => {
            return (
              <img
                src={item.url}
                alt={item.name}
                key={item.id}
                className="img-mobile"
                onClick={() => showModal(item)}
              />
            );
          })}
        </>

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
    </>
  );
};
