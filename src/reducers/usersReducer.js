
const initialState = {
    allUsers: [],
    currentUser: {},
    loggedIn: false,
    followed: []
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
                            loggedIn: true,
                            followed: existingUser.followed
                        }
                } else {
                    return {...state, currentUser: action.payload, loggedIn: true}
                }; 
        case 'LOG_USER': //remove this?
            return {...state, loggedIn: !state.loggedIn, followed: []}
        case 'LOGOUT_USER':
            return {...state, currentUser: {}, loggedIn: false, followed: []}
        case 'FOLLOW_USER':
            const removeUser = state.allUsers.filter( user => user.id !== action.payload.connection.followed_id)
            return {...state, allUsers: removeUser, followed: [...state.followed, action.payload.user]}
        case 'UNFOLLOW_USER':
            //add removed user back to allUsers and remove from followed
            const unfollowedUser = state.followed.find ( user => user.id === action.payload )
            const updatedFollowed = state.followed.filter( user => user.id !== action.payload)
            return {...state, allUsers: [...state.allUsers, unfollowedUser], followed: updatedFollowed }
            default:
            return state
    }
}