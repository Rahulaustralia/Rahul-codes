const initialState = {
  count: 2,
};

export const Counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + action.payload };
    case "DEC":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
