import { DEL, TOGGLE } from "../Action/ActionConstent";

function ProductReducer(state, action) {
  switch (action.type) {
    case DEL:
      let filterData = state.filter((item) => {
        return item.id != action.payload;
      });
      return filterData;
    case TOGGLE:
      return { ...state, hide: !state.hide };

    default:
      return state;
  }
}

export default ProductReducer;
