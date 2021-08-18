import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { registerUser } from '../actions/usersActions'


class RegisterPage extends Component {

    state = {
        firstName: '',
        lastName: '',
        company: '',
        bio: '',
        email: '',
        password: '',
        picture: ''
        // user: {
        //     firstName: '',
        //     lastName: '',
        //     company: '',
        //     bio: '',
        //     email: '',
        //     password: '',
        //     picture: ''
        // },
        // submitted: false
    };

    handleFormChange = e => {
        // this.setState({
        //     ...this.state,
        //     user: {
        //         ...this.state.user,
        //         [e.target.name]: e.target.value
        //     }
        // }, () => console.log(this.state))
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }, () => console.log(this.state))

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // this.setState({
        //     ...this.state,
        //     submitted: true
        // })
        // await this.props.registerUser(this.state)
        this.props.registerUser(this.state)
        this.props.history.push("/home")
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
                        value={this.state.firstName}
                    /> <br />
                    <label>Last Name:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                    /> <br />
                    <label>Company:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="company"
                        value={this.state.company}
                    /> <br />
                    <label>Bio:</label>
                    <textarea
                        onChange={this.handleFormChange}
                        name="bio"
                        value={this.state.bio}
                    /> <br />
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
                    <label>Profile Picture:</label>
                    <input
                        onChange={this.handleProfilePicture}
                        type="file"
                        accept="/images/*"
                        name="picture"
                        // value={this.state.picture}
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

export default withRouter(connect(null, mapDispatchToProps)(RegisterPage))
