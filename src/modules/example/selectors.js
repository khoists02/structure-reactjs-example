import { createSelector } from "reselect";
import { FEATURE_NAME } from "./constants";

const getState = state => {
  return state[FEATURE_NAME];
};

const selectExample = () =>
  createSelector(
    getState,
    state => state.get("loaded")
  );

export { selectExample };
