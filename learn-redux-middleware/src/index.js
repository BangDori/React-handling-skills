import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
/**
 * loggerMiddleware보다 훨씬 더 잘 만들어진 라이브러리이며, 브라우저 콘솔에
 * 나타나는 형식도 훨씬 깔끔함
 */
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, ReduxThunk, sagaMiddleware) // other store enhancers if any
  )
);
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
