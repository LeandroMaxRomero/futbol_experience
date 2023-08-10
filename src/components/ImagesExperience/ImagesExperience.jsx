import { useState } from "react";
import { useModal } from "../hook/useModal";
import Modal from "../Modal/Modal";

const imgs = [
  {
    id: 1,
    url: "./src/img/maradona_img/IMG_4743 2.png",
    name: "maradona con playera azul",
  },
  {
    id: 2,
    url: "./src/img/maradona_img/IMG_4742 2.png",
    name: "maradona abrazo seleccion argentina",
  },
  {
    id: 3,
    url: "./src/img/maradona_img/IMG_4740 2.png",
    name: "maradona con gorra roja",
  },
  {
    id: 4,
    url: "./src/img/maradona_img/IMG_4738.png",
    name: "maradona con playera roja",
  },
  {
    id: 5,
    url: "./src/img/maradona_img/IMG_4739.png",
    name: "maradona con cabello largo",
  },
  {
    id: 6,
    url: "./src/img/maradona_img/IMG_4719.png",
    name: "casa de maradona interior",
  },

  {
    id: 7,
    url: "./src/img//maradona_img/IMG_4716.png",
    name: "casa de maradona fachada",
  },
  {
    id: 8,
    url: "./src/img/maradona_img/IMG_4731.png",
    name: "playeras de maradona en pared colgadas",
  },

  {
    id: 9,
    url: "./src/img/maradona_img/IMG_4730.png",
    name: "interior de casa de maradona",
  },
  {
    id: 10,
    url: "./src/img/maradona_img/IMG_4727.png",
    name: "la casa de dios",
  },
];

const ImagesExperience = () => {
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
      <div className="image-container">
        {imgs.map((img) => {
          return (
            <img
              style={{ cursor: "pointer" }}
              key={img.id}
              src={`${img.url}`}
              alt={`${img.name}`}
              onClick={() => showModal(img)}
            />
          );
        })}
      </div>
    </>
  );
};

export default ImagesExperience;
