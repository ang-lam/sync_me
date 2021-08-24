import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/usersActions'

const Logout = (props) => {

    const handleClick = () => {
        //remove token from localStorage
        localStorage.removeItem('token');
        //remove user object from redux store
        props.logoutUser();
        //redirect to login page!!!!!!!
        props.history.push('/')
    }

    return ( 
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default connect(null, {logoutUser})(Logout)
