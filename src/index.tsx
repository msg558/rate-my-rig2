import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import {likesReducer} from './reducers/LikesReducer'
import createSagaMiddleware from 'redux-saga'
import {watcherSaga} from './sagas/rootSaga'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const sagaMiddleware = createSagaMiddleware()
const store = createStore(likesReducer, undefined, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcherSaga)

root.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
