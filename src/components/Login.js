import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { login } from '../actions/usersActions'
import { fetchUsers } from '../actions/usersActions'
import { fetchPosts } from '../actions/postsActions'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    componentDidMount(){
        if (!this.props.user.loggedIn) {
            this.props.fetchUsers()
            this.props.fetchPosts()
        }
        // if (this.props.user.currentUser !== {}){
        //     this.props.routeInfo.history.push('/home')
        // }
    }

    handleFormChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.login(this.state)
        this.props.routeInfo.history.push('/posts')
        
    }

    render() {
        console.log('login', this.props.user.currentUser)
    
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="ui form segment">
                    <div className="field">
                        <label>Email</label>
                        <input
                            onChange={this.handleFormChange}
                            type="text"
                            name="email"
                            value={this.state.email}
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                            onChange={this.handleFormChange}
                            type="password"
                            name="password"
                            value={this.state.password}
                        />
                    </div>
                    <button className="ui button" type="submit">Login</button> <br /><br />
                    Don't have an account? Register <Link to='/signup'>here</Link>!
                </form>
                <div className="ui segment">
                    <h3>SYNC ME</h3>
                    <p>This will be description for application</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: userInfo => dispatch(login(userInfo)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchPosts: () => dispatch(fetchPosts())
    }
}

const mapStateToProps = state => {
    return ({user: state.users})
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
