import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";

// to make react and reduc work together
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import "./index.css";
import "./flexbox.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#created-by-walid-hawari")
);
