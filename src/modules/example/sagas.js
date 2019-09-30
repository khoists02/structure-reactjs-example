import { all, takeLatest } from "redux-saga/effects";
import * as types from "./constants";

function example() {
  console.log("sagas-example---:");
}

export default function* root() {
  yield all([takeLatest(types.EXAMPLE, example)]);
}
