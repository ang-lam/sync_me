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
        fetch('http://127.0.0.1:3000/login', {
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
        fetch('http://127.0.0.1:3000/users', {
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

export const logoutUser = () => ({ type: 'LOGOUT_USER' })

export const buttonAction = (button, followedId, followerId) => {
    const connection = {
        followed_id: followedId,
        follower_id: followerId
    }
    if(button === 'SYNC'){
        return dispatch => {
            fetch('http://127.0.0.1:3000/connections', {
            method: 'POST',
            body: JSON.stringify({connection}),
            headers: { 'Content-Type': 'application/json'}
            })
            .then (resp => resp.json())
            .then (data => {
                dispatch({ type: 'FOLLOW_USER', payload: data})
            })
        }   
    }
    // else if(button === 'UNFOLLOW'){
    //     return dispatch => {
    //         fetch(`http://127.0.0.1:3000/connections/${id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         .then(resp => resp.json())
    //         .then(json => alert(json.message))
    //     }
    // }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})