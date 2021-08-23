import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/usersActions'

class NavBar extends Component {
    handleClick = e => {
        e.preventDefault()
        //remove token from localStorage
        localStorage.removeItem('token');
        //remove user object from redux store
        this.props.logoutUser();
        //redirect to login page!!!!!!!
 

    }

    render(){
        return (
            <div className="ui segment">
                <Link to='/home'>Home</Link> |
                <Link to='/syncs'>Users Syncs</Link> |
                <Link to='/connect'>Sync</Link> |
                <Link to='/'>Login for testing - will delete</Link> |
                <Link to='/signup'>Signup</Link> |
                {this.props.loggedIn ? <Link to='/' onClick={this.handleClick}>Logout</Link> : null}
                {/* <button onClick={this.handleClick}>Logout</button> */}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return ({loggedIn: state.users.loggedIn})
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
