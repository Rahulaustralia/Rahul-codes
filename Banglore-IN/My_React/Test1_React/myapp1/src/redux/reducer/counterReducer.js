import { INC, DEC } from "../action/actionConstent";

let inicialState = {
  inc: 10,
  dec: 50,
};

function counterReducer(state = inicialState, action) {
  switch (action.type) {
    case INC:
      return { ...state, inc: state.inc + 1 };
    case DEC:
      return { ...state, dec: state.dec - 1 };
    default:
      return state;
  }
}

export default counterReducer;
