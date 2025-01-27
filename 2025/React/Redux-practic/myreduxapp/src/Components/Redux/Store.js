import { combineReducers, createStore } from "redux";
import { Counter, Number } from "./Reducer";

export const store = createStore(combineReducers({ Counter, Number }));
