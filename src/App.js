import React from "react";
import { useDispatch } from "react-redux";
import { openModal, toggleModal } from "./actions/modalActions";
import Modal from "./commonComponents/Modal";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Modal Example</h1>
      <button onClick={() => dispatch(openModal())}>Open Modal</button>
      <button onClick={() => dispatch(toggleModal())}>Toggle Modal</button>
      <Modal />
    </div>
  );
};

export default App;
