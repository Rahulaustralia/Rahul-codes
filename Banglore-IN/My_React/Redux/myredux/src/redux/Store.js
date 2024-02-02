import { createStore } from "redux";
import { CounterReducer } from "./reducer/CounterReducer";
let store = createStore(CounterReducer);

export default store;
