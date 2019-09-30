import { fromJS } from "immutable";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}, history) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;
  const store = createStore(
    createRootReducer(history),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createRootReducer(history, store.injectedReducers));
    });
  }

  return store;
};

export default configureStore;
