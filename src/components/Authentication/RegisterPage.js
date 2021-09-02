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
        this.props.routeInfo.history.push('/')
    }

    handleProfilePicture = e => {
        this.setState({
            picture: e.target.files[0]
        })
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

                    {/* <div className="inline fields">
                        <label>Role</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="role" value="Mentor" checked="" tabindex="0" className="hidden" />
                            </div>
                        </div>
                    </div> */}

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
                    {/* <label>Profile Picture:</label> */}
                    {/* <input
                        onChange={this.handleProfilePicture}
                        type="file"
                        accept="/images/*"
                        name="picture"
                        // value={this.state.picture}
                    /> <br /> */}
                    <button className="ui button" type="submit">Register</button>
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
