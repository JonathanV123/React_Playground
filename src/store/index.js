import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createRootReducer from "../rootReducer/rootReducer";



// eslint-disable-next-line
const isDevelopmentMode = "development" === process.env.NODE_ENV;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && isDevelopmentMode
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const middlewares = [
  thunkMiddleware,
];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(createRootReducer(), enhancer);
