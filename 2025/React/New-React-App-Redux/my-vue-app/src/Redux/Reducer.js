let initialState = {
  count: 1,
};

let initialState2 = {
  loading: false,
  data: [],
  err: "",
};

export function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + action.payload };

    case "DEC":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
}

export function FetchReducer(state = initialState2, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };

    case "err":
      return { ...state, err: action.payload, loading: false };

    case "DataFetch":
      return { ...state, data: action.payload, loading: false, err: null };

    default:
      return state;
  }
}
