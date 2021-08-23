
const initialState = {
    allUsers: [],
    currentUser: {},
    loggedIn: false
}

export const usersReducer = (state = initialState, action) => {
    const existingUser = state.allUsers.find(user => user.id === action.payload.id)
    switch(action.type){
        case 'FETCH_USERS':
            return {...state, allUsers: [...action.payload]}
        case 'LOGIN_USER':
                if (!!existingUser) {
                    console.log('existing', existingUser)
                    const removedUser = state.allUsers.filter( user => user.id !== existingUser.id)
                    //remove associated users from all usersArray
                    return {...state, 
                            allUsers: removedUser,
                            currentUser: existingUser,
                            loggedIn: true 
                        }
                } else {
                    return {...state, currentUser: action.payload, loggedIn: true}
                }; 
        case 'LOG_USER': //remove this?
            return {...state, loggedIn: !state.loggedIn}
        case 'LOGOUT_USER':
            return {...state, currentUser: {}, loggedIn: false}
        default:
            return state
    }
}