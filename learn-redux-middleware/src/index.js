import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
// import loggerMiddleware from "./lib/loggerMiddleware";

/**
 * loggerMiddleware보다 훨씬 더 잘 만들어진 라이브러리이며, 브라우저 콘솔에
 * 나타나는 형식도 훨씬 깔끔함
 */
import { createLogger } from "redux-logger";

const logger = createLogger();

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
    // other store enhancers if any
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
