import React from "react";
import ReactDOM from "react-dom";

// to make react and reduc work together
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#created-by-walid-hawari")
);
