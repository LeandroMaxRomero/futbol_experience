import { useState } from "react";
import { useModal } from "../hook/useModal";
import Modal from "../Modal/Modal";

const ImagesExperience = ({ imgs }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [modalContent, setModalContent] = useState({});

  console.log(imgs);

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
        {imgs?.map((img) => {
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
