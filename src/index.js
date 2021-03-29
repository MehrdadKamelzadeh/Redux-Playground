import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({trace:true});
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(ReduxThunk))
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
