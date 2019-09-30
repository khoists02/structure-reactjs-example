import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import App from "./App";
import { Provider } from "react-redux";
import { flatten } from "lodash";
import { createBrowserHistory } from "history";
import RouterContainer from "./core/router/RouterContainer";
import configureStore from "./redux/configureStore";
import routes from "./router";
import * as serviceWorker from "./serviceWorker";

moment.locale("en");

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <RouterContainer
      history={history}
      //   loginRoutes={flatten(loginRoutes)}
      routes={routes}
    />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
