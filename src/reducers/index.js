import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import registration from './registration';
import session from './session';
import updateParams from './update';
import recommendations from './recommendation'
import { history } from '../store';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  registration: registration,
  session: session,
  updateParams: updateParams,
  recommendations: recommendations
})

export default rootReducer;
