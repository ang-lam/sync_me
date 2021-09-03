//refactor url to const
const apiUrl = 'http://127.0.0.1:3000'

export const fetchUsers = () => {
    return dispatch => {
        fetch(`${apiUrl}/users`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_USERS', payload: data}))
    }
}

export const login = user => {
    return dispatch => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                if(data.failure){
                    alert(data.failure)
                }else{dispatch(loginUser(data.user))}
                
            })
    }
}

export const registerUser = user => {
    return dispatch => {
        fetch(`${apiUrl}/users`, {
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
            fetch(`${apiUrl}/connections`, {
            method: 'POST',
            body: JSON.stringify({connection}),
            headers: { 'Content-Type': 'application/json'}
            })
            .then (resp => resp.json())
            .then (data => {
                dispatch({ type: 'FOLLOW_USER', payload: data})
                alert(data.message)
            })
        }   
    }else if(button === 'UNFOLLOW'){
        return dispatch => {
            fetch(`${apiUrl}/delete_connection`, {
                method: 'DELETE',
                body: JSON.stringify({connection}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: 'UNFOLLOW_USER', payload: data.unfollowed_id})
                alert(data.message)
            })
        }
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})