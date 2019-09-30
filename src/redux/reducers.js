import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import authReducer from "../modules/auth/reducers";
const createRootReducer = (history, injectedReducers) => {
  return combineReducers({
    // AUTH: authReducer,
    router: connectRouter(history),
    ...injectedReducers
  });
};

export default createRootReducer;
