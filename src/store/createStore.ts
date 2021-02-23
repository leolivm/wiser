import { createStore, compose, applyMiddleware, Reducer } from "redux";

export default (reducers: Reducer, middlewares: any) => {
  const enhancer = __DEV__
    ? compose(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
