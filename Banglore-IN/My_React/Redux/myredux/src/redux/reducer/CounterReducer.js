const intialValue = { inc: 1, dec: 10 };
export function CounterReducer(state = intialValue, action) {
  switch (action.type) {
    case "inc":
      return { ...state, inc: state.inc + 1 };
    case "dec":
      return { ...state, dec: state.dec - 1 };

    default:
      return state;
  }
}
