export const fetchPosts = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/posts')
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_POSTS', payload: data}))
    }
}