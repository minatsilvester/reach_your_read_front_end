import Constants from '../constants';

const initialState = {
  available_skills: null,
  updateStatus: null
}

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case Constants.GET_AVAILABLE_SKILLS:
      return {...state, available_skills: action.available_skills}

    case Constants.ACKNOWLEDGE_UPDATE_STATUS:
        return {...state, updateStatus: action.updateStatus}

    default:
      return initialState;
  }
}
