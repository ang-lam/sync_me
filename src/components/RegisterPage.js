import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { registerUser } from '../actions/usersActions'


class RegisterPage extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            company: '',
            bio: '',
            email: '',
            password: '',
            picture: ''
        },
        submitted: false
    };

    handleFormChange = e => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        }, () => console.log(this.state))
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            submitted: true
        })
        await this.props.registerUser(this.state)
    }

    handleProfilePicture = e => {
        this.setState({
            picture: e.target.files[0]
        })
    }


    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="firstName"
                        value={this.state.user.firstName}
                    /> <br />
                    <label>Last Name:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="lastName"
                        value={this.state.user.lastName}
                    /> <br />
                    <label>Company:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="company"
                        value={this.state.user.company}
                    /> <br />
                    <label>Bio:</label>
                    <textarea
                        onChange={this.handleFormChange}
                        name="bio"
                        value={this.state.user.bio}
                    /> <br />
                    <label>Email:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="email"
                        value={this.state.user.email}
                    /> <br />
                    <label>Password:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="password"
                        name="password"
                        value={this.state.user.password}
                    /> <br />
                    <label>Profile Picture:</label>
                    <input
                        onChange={this.handleProfilePicture}
                        type="file"
                        accept="/images/*"
                        name="picture"
                        value={this.state.user.picture}
                    /> <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: userInfo => dispatch(registerUser(userInfo))
    }
  
}

export default connect(null, mapDispatchToProps)(RegisterPage)
