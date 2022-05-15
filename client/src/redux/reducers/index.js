import { combineReducers } from "redux";
import dialog from "./dialog";
import message from "./message";

export default combineReducers({
    dialog,
    message
})