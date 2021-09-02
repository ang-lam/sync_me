const apiUrl = 'http://127.0.0.1:3000'

export const fetchMessages = () => {
    return dispatch => {
        fetch(`${apiUrl}/messages`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_MESSAGES', payload: data}))
    }
}

export const createMessage = (content, sender, recipient) => {
    const message = {
        sender_id: sender.id,
        recipient_id: recipient,
        content: content
    }
    return dispatch => {
        fetch(`${apiUrl}/messages`, {
            method: 'POST',
            body: JSON.stringify({message}),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'CREATE_MESSAGE', payload: data })
        })
    }
}

export const fetchInbox = user => {
    return dispatch => {
        fetch(`${apiUrl}/users/${user.id}/inbox`)
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'FETCH_INBOX', payload: data}))
    }
}