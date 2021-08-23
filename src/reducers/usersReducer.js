
const initialState = {
    allUsers: [],
    currentUser: {},
    loggedIn: false
}

export const usersReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'FETCH_USERS':
            return {...state, allUsers: [...action.payload]}
        case 'LOGIN_USER':
            const existingUser = state.allUsers.find(user => user.id === action.payload.id)
                if (!!existingUser) {
                    console.log('existing', existingUser)
                    const removedUser = state.allUsers.filter( user => {
                        const userIds = existingUser.followed.map ( user => user.id)
                        return !userIds.includes(user.id) && user !== existingUser})
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