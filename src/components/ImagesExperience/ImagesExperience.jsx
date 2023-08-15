import { useState } from "react";
import { useModal } from "../hook/useModal";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

const ImagesExperience = ({ imgs }) => {
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
      <div className="image-container show">
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
ImagesExperience.propTypes = {
  imgs: PropTypes.node.isRequired,
};

export default ImagesExperience;
