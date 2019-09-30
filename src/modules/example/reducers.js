import { fromJS } from "immutable";
import * as types from "./constants";

export const initialState = fromJS({
  loaded: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EXAMPLE: {
      return state.set("loaded", true);
    }
    default:
      return state;
  }
};
export default reducer;
