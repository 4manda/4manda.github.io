import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, initialState } from './reducers';
import loggingMiddleware from './middleware/loggingMiddleware';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      (
        process.env.NODE_ENV !== 'production'
        && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ) ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      applyMiddleware(loggingMiddleware),
    ),
  );
  return store;
};

export default configureStore;
