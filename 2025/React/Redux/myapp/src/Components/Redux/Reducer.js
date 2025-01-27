import { DEC, INC } from "./Action/actionType";

const initialState = {
  count: 1,
};

function Counter(state = initialState, action) {
  switch (action.type) {
    case INC:
      return { ...state, count: state.count + action.payload };
    case DEC:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

export default Counter;
