const initialState = {
    messages: []
}

export const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_MESSAGES':
            return {...state, messages: action.payload}
        default:
            return state
    }
}