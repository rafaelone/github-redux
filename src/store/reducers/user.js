import * as actionTypes from '../actions/actionTypes'

const initialState = {
  user: {}
}

const reducer = (state = initialState, actions) => {
  switch(actions.type){
    case actionTypes.SET_USER:
      return {
        ...state,
        user: actions.user
      }
    default:
      return state;
  }
}

export default reducer