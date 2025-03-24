import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL } from "./modalActionTypes";

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});
