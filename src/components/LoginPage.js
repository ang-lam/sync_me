import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/usersActions'
import { fetchUsers } from '../actions/usersActions'

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    componentDidMount(){
        this.props.fetchUsers()
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
        this.props.routeInfo.history.push('/home')
        
    }

    render() {
        console.log('login', this.props.user.currentUser)
    
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
