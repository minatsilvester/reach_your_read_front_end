import Constants from '../constants';

const initialState = {
  readingRecommendations: null,
  error: null
}

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case Constants.ADD_RECOMMENDATION:
      return {...state, readingRecommendations: action.readingRecommendations, error: null}

    case Constants.RECOMMENDATION_ADD_ERROR:
      return {...state, error: action.error}

    default:
      return initialState   
  }
}
