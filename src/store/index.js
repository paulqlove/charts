/*  eslint no-undef: "off" */
// import thunk from "redux-thunk";
// import { applyMiddleware, createStore } from "redux";
import { itemsFetchData } from "../actions/index";
// import combineReducers from "../reducers/index.jsx";
import configureStore from "./configureStore"


const defaultState = {
    items: (url) => dispatch(itemsFetchData(url))

};
const store = configureStore();

export default store;
