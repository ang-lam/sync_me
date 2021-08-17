import React, { Component } from 'react';

class RegisterPage extends Component {

    state = {
        firstName: '',
        lastName: '',
        company: '',
        bio: '',
        email: '',
        password: '',
        picture: ''
    };

    handleFormChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
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
                    /> <br />
                    <label>Last Name:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="lastName"
                    /> <br />
                    <label>Company:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="company"
                    /> <br />
                    <label>Bio:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="bio"
                    /> <br />
                    <label>Email:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="email"
                    /> <br />
                    <label>Password:</label>
                    <input
                        onChange={this.handleFormChange}
                        type="text"
                        name="password"
                    /> <br />
                    <label>Profile Picture:</label>
                    <input
                        onChange={this.handleProfilePicture}
                        type="file"
                        accept="/images/*"
                        name="picture"
                    /> <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterPage
