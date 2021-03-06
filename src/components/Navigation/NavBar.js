import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {
    render(){
        return (
            <div className="ui segment padded">
            <div className="ui top visible horizontal sidebar labeled icon menu">
                <div className="item">
                    <div className="home icon">
                        <Link to='/'>Home</Link>
                    </div>
                </div>
                {!this.props.loggedIn ? 
                    <div className="item">
                        <div className="home icon">
                            <Link to='/signup'>Register</Link>
                        </div>
                    </div>
                    : null
                }
                
                {this.props.loggedIn ?
                    <>
                        <div className="item">
                            <div className="home icon">
                                <Link to='/posts'>Feed</Link>
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
                                <Link to={`/users/${this.props.currentUser.username}/inbox`}>Inbox</Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="home icon">
                                <Link to='/logout'>Logout</Link>
                            </div>
                         </div>
                    </>
                    : null
                }
            </div>
        </div>
        )
    }
    
}

const mapStateToProps = state => {
    return ({
        loggedIn: state.users.loggedIn,
        currentUser: state.users.currentUser
    })
}

export default connect(mapStateToProps)(NavBar)
