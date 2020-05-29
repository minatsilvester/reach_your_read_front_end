import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

export const history = createHistory();

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore(){
  return createStore(
    rootReducer(history),
    {},
    applyMiddleware(loggerMiddleware, thunk, routerMiddleware(history))
  )
}
