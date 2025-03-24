import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../actions/modalActions";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.users?.isOpen);

  console.log("Modal state:", isOpen); // ✅ Debugging Redux state

  if (!isOpen) return null; // If false, the modal won't render

  const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Modal Window</h2>
        <p>This is a modal controlled by Redux.</p>
        <button style={buttonStyle} onClick={() => dispatch(closeModal())}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
