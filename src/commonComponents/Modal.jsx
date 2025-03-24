import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../actions/modalActions";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.users?.isOpen); // ✅ Correct selector

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 p-10 rounded-2xl shadow-2xl transform scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔥 Powerful Modal</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          This is a stronger, bolder, and visually appealing modal controlled by Redux.
        </p>
        <div className="flex justify-center">
          <button
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300"
            onClick={() => dispatch(closeModal())}
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
