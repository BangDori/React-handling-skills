import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Store 생성
 * rootReducer (Reducer function)
 * composeWithDevTools() 개발자 도구 추가
 */
const store = legacy_createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * 리액트 컴포넌트에서 스토어를 사용할 수 있도록 하기 위해
 * App 컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸기
 */
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
