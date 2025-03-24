import React from "react";
import { useDispatch } from "react-redux";
import { openModal, toggleModal } from "./actions/modalActions";
import Modal from "./commonComponents/Modal";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Redux Modal Example</h1>
        <div className="space-x-4">
          <button
            onClick={() => dispatch(openModal())}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Open Modal
          </button>
          <button
            onClick={() => dispatch(toggleModal())}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Toggle Modal
          </button>
        </div>
        <Modal />
      </div>
    </div>
  );
};

export default App;