import React, { Component } from 'react';

class RegisterPage extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        },
        submitted: false
    };


    render() {
        return (
            <div>
                <h2>Register</h2>
                <form>
                    <div></div>
                </form>
            </div>
        )
    }
}

export default RegisterPage
