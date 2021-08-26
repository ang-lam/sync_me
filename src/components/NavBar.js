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
                <div className="ui top visible horizontal sidebar labeled icon menu">
                    <div className="item">
                        <div className="home icon">
                            <Link to='/home'>Home</Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="home icon">
                            <Link to='/followed'>Synced</Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="home icon">
                            <Link to='/users'>Find A Sync</Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="home icon">
                            <Link to='/'>Login</Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="home icon">
                            {this.props.loggedIn ? <Link to='/logout'>Logout</Link> : null}
                            {/* <button onClick={this.handleClick}>Logout</button> */}
                        </div>
                    </div>
                    
                    
                    
                    
                    
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return ({loggedIn: state.users.loggedIn})
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
