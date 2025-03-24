import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../actions/modalActions";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.users?.isOpen); // ✅ Correct selector

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-2/5 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Smaller Modal</h2>
        <p className="text-base text-gray-700 text-center mb-6">
          This is a slightly smaller modal for a more compact look.
        </p>
        <div className="flex justify-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={() => dispatch(closeModal())}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
