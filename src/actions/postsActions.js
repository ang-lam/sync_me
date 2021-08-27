export const fetchPosts = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/posts')
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_POSTS', payload: data}))
    }
}

export const createPost = post => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/posts', {
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