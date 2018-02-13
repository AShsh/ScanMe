import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL, REQUEST_PATH, LOGOUT } from '../constants/auth';
import request from 'axios';

export function logIn(payload) {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        });

        request.post(
            REQUEST_PATH,
            { payload }
        )
            .then(result => {
                dispatch({
                    type: LOGIN_REQUEST_SUCCESS,
                    payload: result.data
                })
            })
            .catch(result => {
                dispatch({
                    type: LOGIN_REQUEST_FAIL,
                    payload: false
                })
            })
    }
}

export function logOut(payload) {
    return dispatch => {
        dispatch({
            type: LOGOUT
        });
    }
}
