import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
//import all reducers here

export const rootReducer = combineReducers({
    //keys for the state -> users: usersReducer
    users: usersReducer
})