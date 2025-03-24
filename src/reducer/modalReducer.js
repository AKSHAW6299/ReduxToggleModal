import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL } from "../actions/modalActionTypes";

const initialState = {
  isOpen: false, // ✅ Initial state should be false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    case TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export default modalReducer;
