export const fetchMessages = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/messages')
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
        fetch('http://127.0.0.1:3000/messages', {
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