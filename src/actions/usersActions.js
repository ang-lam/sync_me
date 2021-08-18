//fetch users


//post users (createUser)

// export const userActions = {
//     login,
//     logout,
//     register,
//     getAll,
//     delete: _delete
// }

// export const registerUser = user => {
//     fetch('http://127.0.0.1:3000/users', {
//         method: 'POST',
//         body: JSON.stringify(user),
//         headers: { 'Content-Type': 'application/json'}
//     })
//         .then (resp => resp.json())
//         .then (user => dispatch({ type: 'CREATE_USER', payload: user}))
// }

export const registerUser = user => {
    console.log('argument', user)
    return async dispatch => {
        return fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json'}
    })
        .then (resp => resp.json())
        .then (data => {
            console.log(data)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})