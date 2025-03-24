import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    users: modalReducer,
})

export default rootReducer;