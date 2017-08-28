/*eslint no-undef: "warn"*/
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
// import { itemsHasErrored } from '../actions/index';
// import combineReducers from "../reducers/index";
import configureStore from './configureStore'


const store = configureStore(false);

export default store;
