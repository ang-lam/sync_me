const initialState = {
    allUsers: [],
    currentUser: {}
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return {...state, allUsers: [...action.payload]}
        // case 'CREATE_USER':
        //     return [...state, action.payload]
        case 'LOGIN_USER':
            const newUser = state.allUsers.find(user => user.id === action.payload.id)
            debugger
                if (newUser) {
                    return {...state, currentUser: action.payload }
                } else {
                    return {...state, allUsers: state.allUsers.concat(action.payload), currentUser:action.payload}
                }; 
        default:
            return state
    }
}