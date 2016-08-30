import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';
import DevTools from './components/Dev/DevTools';

const configureStore = () => {
  const middlewares = [ thunk ];
  let enhancer;

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
    enhancer = compose(
      applyMiddleware(...middlewares),
      // Required! Enable Redux DevTools with the monitors you chose
      DevTools.instrument()
    );
  } else {
    enhancer = applyMiddleware(...middlewares);
  }

  return createStore(
    todoApp,
    enhancer
  );
};

export default configureStore;
