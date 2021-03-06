const apiUrl = 'http://127.0.0.1:3000'

export const fetchPosts = () => {
    return dispatch => {
        fetch(`${apiUrl}/posts`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_POSTS', payload: data}))
    }
}

export const createPost = (content, user) => {
    const post = {
        user_id: user.id,
        content: content
    }
    return dispatch => {
        fetch(`${apiUrl}/posts`, {
            method: 'POST',
            body: JSON.stringify({post}),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'CREATE_POST', payload: data })
        })
    }
}