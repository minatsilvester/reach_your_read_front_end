import Constants from '../constants';
import { push } from 'connected-react-router';
import { httpGet, httpPost } from '../utils'

const Actions = {};

Actions.getAllSkill = () => {
  return dispatch => {
    httpGet("http://localhost:9000/test/update/get_all_skill")
    .then((response => {
      console.log(response)
      dispatch({
        type: Constants.GET_AVAILABLE_SKILLS,
        available_skills: response.skills
      })
    }))
    .catch((error) => {
      error.response.json()
      .then((errorJson) => {
        console.log(error)
        dispatch(push('/update_profile'))
      })
    })
  }
}

Actions.updateUser = (data) => {
  return dispatch => {
    httpPost("http://localhost:9000/test/update/update_user", data)
    .then((response) => {
      dispatch({
        type: Constants.ACKNOWLEDGE_UPDATE_STATUS,
        updateStatus: "success"
      })
      dispatch(push('/feeds'))
    })
    .catch((error) => {
      error.response.json()
      .then((errorJSON) => {
        dispatch(push('/update_user'))
      })
    })
  }
}

export default Actions;
