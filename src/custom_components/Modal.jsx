import React from "react";
import "../styles/tokens.css";
import "../styles/modal.css";

function Modal({ isOpen, onClose, child }) {
  if (!isOpen) {
    console.log("closed");
    return null;
  }
  console.log("open");
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img alt="Missing Image" src={child} />
        <span className="modal__close" onClick={onClose}>&times;</span>
      </div>
    </div>
  );
}

export default Modal;