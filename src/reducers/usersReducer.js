
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
                    return {...state, 
                            allUsers: removedUser,
                            currentUser: action.payload,
                            loggedIn: true 
                        }
                } else {
                    return {...state, currentUser: action.payload, loggedIn: true}
                }; 
        case 'LOG_USER':
            return {...state, loggedIn: !state.loggedIn}
        default:
            return state
    }
}