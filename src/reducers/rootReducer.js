import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { usersReducer } from './usersReducer';
import { messagesReducer } from './messagesReducer'
//import all reducers here

export const rootReducer = combineReducers({
    //keys for the state -> users: usersReducer
    users: usersReducer,
    posts: postsReducer,
    messages: messagesReducer
})