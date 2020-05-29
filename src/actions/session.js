import Constants from '../constants';
import { push } from 'connected-react-router';
import { httpPost } from '../utils';

const Actions = {};

Actions.signIn = (data) => {
  return dispatch => {
    httpPost("http://localhost:9000/test/sessions/new", data)
    .then((response) => {
      console.log(response)
      localStorage.setItem('jwtAuthToken', response.authToken)
      dispatch({
        type: Constants.CURRENT_USER,
        CurrentUser: response
      })
      if(response.first_time_logger){
        dispatch(push('/update_profile'))
      }
      else{
        dispatch(push('/feeds'))
      }
    })
    .catch((error) => {
      error.response.json()
      .then((errorJSON) => {
        console.log(errorJSON)
        dispatch({
          type: Constants.SESSION_ERROR,
          error: errorJSON,
        })
      })
      dispatch(push('/sign_in'))
    })
  };
}

Actions.CurrentUser = () => {
  return dispatch => {
    const authToken = localStorage.getItem('jwtAuthToken')
    httpPost("http://localhost:9000/test/sessions/current_user", {jwt: authToken})
    .then((response) => {
      console.log(response)
      dispatch({
        type: Constants.CURRENT_USER,
        currentUser: response,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  };
}

Actions.SignOut = () => {
  return dispatch => {
    localStorage.removeItem('jwtAuthToken');
    dispatch({
      type: Constants.USER_SIGNED_OUT,
    })
    dispatch(push('/'))
  }
}

export default Actions;
