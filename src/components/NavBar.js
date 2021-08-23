import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/usersActions'

class NavBar extends Component {
    handleClick = e => {
        e.preventDefault()
        //remove token from localStorage
        localStorage.removeItem('token')
        //remove user object from redux store
        this.props.logoutUser()
    }

    render(){
        return (
            <div className="ui segment">
                <Link to='/home'>Home</Link> |
                <Link to='/syncs'>Users Syncs</Link> |
                <Link to='/connect'>Sync</Link> |
                <Link to='/'>Login for test</Link> |
                <Link to='/signup'>Signup</Link> |
                <button onClick={this.handleClick}>Logout</button>
            </div>
        )
    }
    
}

export default connect(null, { logoutUser })(NavBar)
