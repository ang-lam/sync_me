const initialState = {
    messages: [],
    usersInInbox:[]
}

export const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_MESSAGES':
            return {...state, messages: action.payload}
        case 'CREATE_MESSAGE':
            const findRecipient = state.usersInInbox.find(user => user.id === action.payload.recipient_id) //find or add to users
            //remove user and add user back in to the front?
            return {...state, messages: [...state.messages, action.payload]}
        case 'FETCH_INBOX':
            return {...state, usersInInbox: action.payload}
        default:
            return state
    }
}