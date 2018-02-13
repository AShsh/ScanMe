import { SET_RESULT, CLEAR_RESULT } from '../constants/scan';

const initialState = {
  data: ''
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_RESULT:
      return { ...state, data: action.payload }

    case CLEAR_RESULT:
      return { ...state, data: "" }

    default:
      return state
  }
}