//refactor url to const
export const fetchUsers = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/users')
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_USERS', payload: data}))
    }
}

export const login = user => {
    return dispatch => {
        return fetch('http://127.0.0.1:3000/users', {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            })
    }
}

export const registerUser = user => {
    return dispatch => {
        return fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        body: JSON.stringify({user}),
        headers: { 'Content-Type': 'application/json'}
    })
        .then (resp => resp.json())
        .then (data => {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})