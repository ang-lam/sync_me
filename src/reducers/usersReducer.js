export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return action.payload
        case 'CREATE_USER':
            return [...state, action.payload]
        default:
            return state
    }
}