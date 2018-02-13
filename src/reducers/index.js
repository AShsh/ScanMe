import { combineReducers } from 'redux';
import auth from './auth';
import scan from './scan';

export default combineReducers({
    auth,
    scan
})
