import { SET_RESULT, CLEAR_RESULT } from '../constants/scan';

export function setResult(data) {
    return dispatch => {
        dispatch({
            type: SET_RESULT,
            payload: data
        });
    }
}

export function clearResult(data) {
    return dispatch => {
        dispatch({
            type: CLEAR_RESULT,
            payload: data
        });
    }
}