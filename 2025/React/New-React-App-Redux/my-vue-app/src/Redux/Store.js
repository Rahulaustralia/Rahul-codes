import { combineReducers, createStore } from "redux";
import { CounterReducer, FetchReducer } from "./Reducer";

export const store = createStore(
  combineReducers({ CounterReducer, FetchReducer })
);
