const initialState = {
  count1: 1,
  count2: 1,
  count3: 1,
  number: 0,
};

export function Counter(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count1: state.count1 + action.payload,
        count2: state.count2 * action.payload,
        count3: state.count3 - action.payload,
      };

    default:
      return state;
  }
}

export function Number(state = initialState, action) {
  switch (action.type) {
    case "INC2":
      return {
        ...state,
        number: state.number + action.payload,
      };

    default:
      return state;
  }
}
