//fetch users


//post users (createUser)

export const createUser = user => {
    fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json'}
    })
        .then (resp => resp.json())
        .then (user => dispatch({ type: 'CREATE_USER', payload: user}))
}