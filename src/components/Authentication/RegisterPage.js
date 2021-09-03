import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { registerUser } from '../../actions/usersActions'


class RegisterPage extends Component {

    state = {
        firstName: '',
        lastName: '',
        company: '',
        bio: '',
        email: '',
        password: '',
        username: ''
    };

    handleFormChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.registerUser(this.state)
        this.props.routeInfo.history.push('/')
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <h3 className="ui dividing header">Register</h3>
                    <div className="field">
                        <label>Name</label>
                        <div className="two fields">
                            <div className="field">
                                <input
                                onChange={this.handleFormChange}
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                placeholder="First Name"
                                />
                            </div>
                            <div className="field">
                                <input
                                onChange={this.handleFormChange}
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                />
                            </div>
                        </div>  
                    </div>
                    <div className="field">
                        <label>Username</label>
                        <input
                            onChange={this.handleFormChange}
                            type="text"
                            name="username"
                            value={this.state.username}
                        />
                    </div>
                    <div className="field">
                        <label>Company</label>
                        <input
                            onChange={this.handleFormChange}
                            type="text"
                            name="company"
                            value={this.state.company}
                        />
                    </div>
                    <div className="field">
                        <label>Bio</label>
                        <textarea
                            onChange={this.handleFormChange}
                            name="bio"
                            value={this.state.bio}
                        />
                    </div>
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
                    <button className="ui button" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { registerUser })(RegisterPage))
