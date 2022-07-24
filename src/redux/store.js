import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { uiReducer } from "./reducers/uiReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { lessonByIdReducer, lessonReducer } from "./reducers/lessonReducer";
import { homeReducer } from "./reducers/homeReducer";

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    authReducer: authReducer,
    uiReducer: uiReducer,

    lessonReducer: lessonReducer,
    lessonByIdReducer: lessonByIdReducer,
    homeReducer: homeReducer
})

const store = createStore(reducers, composeEnhancers(middleware));

export default store;