const initialState = {
  count: 1,
};

export const Counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + action.payload };

    default:
      return state;
  }
};
