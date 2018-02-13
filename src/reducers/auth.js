import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL, LOGOUT } from '../constants/auth';

const initialState = {
  isLogin: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return { ...state, isLogin: false }

    case LOGIN_REQUEST_SUCCESS:
      return { ...state, isLogin: action.payload }

    case LOGIN_REQUEST_FAIL:
      return { ...state, isLogin: action.payload }

    case LOGOUT:
      return { ...state, isLogin: action.payload }

    default:
      return state
  }
}