import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "../reducers/index";
import { createLogger } from "redux-logger";
const middleware = [thunk];

middleware.push(createLogger());

export default function configureStore(initialState) {
    return createStore(
        combineReducers,
        initialState,
        applyMiddleware(...middleware)
    );
}
