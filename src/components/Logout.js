import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/usersActions'

const Logout = (props) => {

    const handleYesClick = () => {
        //remove token from localStorage
        localStorage.removeItem('token');
        //remove user object from redux store
        props.logoutUser();
        //redirect to login page!!!!!!!
        props.history.push('/')
    }

    const handleNoClick = () => {
        props.history.push('/posts')
    }

    return ( 
        <div className="ui segment">
            <h3>Are you sure you want to logout?</h3>
            <button className="ui button" onClick={handleYesClick}>Yes</button>
            <button className="ui button" onClick={handleNoClick}>No</button>
        </div>
    )
}

export default connect(null, {logoutUser})(Logout)
