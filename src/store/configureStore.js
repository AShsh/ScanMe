
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory';

const history = createHistory()

export default function configureStore() {
  
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger),
    applyMiddleware(routerMiddleware(history))
  )(createStore)(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}
