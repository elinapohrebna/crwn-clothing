import { combineReducers } from 'redux';

import userReducer from './user/user.reduser';


export default combineReducers({
    user: userReducer
});