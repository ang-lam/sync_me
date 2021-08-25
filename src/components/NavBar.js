import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
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
                <Link to='/followed'>Users Syncs</Link> |
                <Link to='/users'>Find A Sync</Link> |
                <Link to='/'>Login for testing - will delete</Link> |
                {this.props.loggedIn ? <Link to='/logout'>Logout</Link> : null}
                {/* <button onClick={this.handleClick}>Logout</button> */}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return ({loggedIn: state.users.loggedIn})
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
