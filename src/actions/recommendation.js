import Constants from '../constants';
import { push } from 'connected-react-router';
import { httpPost, httpGet } from '../utils';

const Actions = {};

Actions.getRecommendations = () => {
  return dispatch => {
    httpGet("http://localhost:9000/test/get_recommendations")
    .then((response) => {
      console.log(response)
      dispatch({
        type: Constants.ADD_RECOMMENDATION,
        readingRecommendation: response,
      })
    })
    .catch((error) => {
      console.log(error)
      dispatch({
        type: Constants.RECOMMENDATION_ADD_ERROR,
        error: error
      })
    })
  }
}
