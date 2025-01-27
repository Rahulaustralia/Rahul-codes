import { combineReducers, createStore } from "redux";
import { Counter } from "./Reducer";
export const store = createStore(combineReducers({ Counter }));
