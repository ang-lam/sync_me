const initialState = {
    messages: [],
    usersInInbox:[],
    isLoading: true
}

export const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_MESSAGES':
            return {...state, messages: action.payload}
        case 'CREATE_MESSAGE':
            return {...state, messages: [...state.messages, action.payload]}
        case 'FETCH_INBOX':
            return {...state, usersInInbox: action.payload, isLoading: false}
        case 'CHANGE_LOADING':
            return {...state, isLoading: true}
        default:
            return state
    }
}