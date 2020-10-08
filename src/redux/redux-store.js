import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";

let store = createStore(todoReducer);

export default store;