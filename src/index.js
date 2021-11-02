import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './components/app/app.component';
import './globalStyles/reset.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCG13sxGTvY-SfZY5ncktYXdql9PGMVsJ8",
  authDomain: "todo-app-anton-matveev.firebaseapp.com",
  projectId: "todo-app-anton-matveev",
  storageBucket: "todo-app-anton-matveev.appspot.com",
  messagingSenderId: "387490315921",
  appId: "1:387490315921:web:312436d21c58b08dd2c930",
  measurementId: "G-SDP7JWZJT4"
};

const app = initializeApp(firebaseConfig);

const rootDiv = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootDiv
);
