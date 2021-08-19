import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/usersActions'
import { withRouter } from 'react-router-dom'
import { fetchUsers } from '../actions/usersActions'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    componentDidMount(){
        this.props.fetchUsers()
    }

    handleFormChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.login(this.state)
        this.props.routeInfo.history.push('/home')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Email:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="email"
                        value={this.state.email}
                    /> <br />
                    <label>Password:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="password"
                        name="password"
                        value={this.state.password}
                    /> <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: userInfo => dispatch(login(userInfo)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

const mapStateToProps = state => {
    return ({user: state.users})
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
