import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './styles/main.css';
import 'whatwg-fetch';
import { Provider } from "react-redux";
import store from "./store/index";
// import configureStore from './store/configureStore';



const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>, document.getElementById('root')
  );
};

render(App);
