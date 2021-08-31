export const fetchMessages = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/messages')
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_MESSAGES', payload: data}))
    }
}