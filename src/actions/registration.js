import Constants from '../constants';
import { push } from 'connected-react-router';
import { httpPost } from '../utils';

const Actions = {}

Actions.signUp = (data) => {
  return dispatch => {
    httpPost("http://localhost:9000/test/users/new", data)
    .then((response) => {
      console.log(response)
      dispatch(push('/sign_in'));
    })
    .catch((error) => {
      error.response.json()
      .then((errorJSON) => {
        console.log(errorJSON)
        dispatch({
          type: Constants.REGISTRATION_ERROR,
          errors: errorJSON,
        })
      })
      dispatch(push('/sign_up'))
    })
  }
}

export default Actions;
