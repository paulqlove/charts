import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./styles/main.css";
import "whatwg-fetch";
import { Provider } from "react-redux";
import store from "./store/index";
// import Chart from "./components/Chart";
// import configureStore from "./store/configureStore";

// const mountingPoint = document.createElement("div");
//
// mountingPoint.className = "react-app";
// document.body.appendChild(mountingPoint);



const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>, document.getElementById("root")
    );
};

// ReactDOM.render(<Chart/>, mountingPoint);

render(App);
