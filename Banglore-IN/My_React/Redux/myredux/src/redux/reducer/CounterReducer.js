const intialValue = { inc: 1, dec: 10 };
export function CounterReducer(state = intialValue, action) {
  switch (action.type) {
    case "INC":
      return { ...state, inc: state.inc + 1 };
    case "DEC":
      return { ...state, dec: state.dec - 1 };

    default:
      return state;
  }
}
