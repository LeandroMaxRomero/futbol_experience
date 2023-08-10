import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          <IoMdCloseCircleOutline style={{ width: "100%", height: "100%" }} />
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
