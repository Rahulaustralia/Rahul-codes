import { createStore, combineReducers } from "redux";
import { Counter } from "./Reducer";

export const store = createStore(combineReducers({ Counter }));
