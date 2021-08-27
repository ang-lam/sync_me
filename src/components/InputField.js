import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postsActions'

class InputField extends Component {

    state = {
        input: ''
    }

    handleInputChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.createPost(this.state.input, this.props.user)   
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        {/* this should be a prop */}
                        <label>What's on your mind?</label>
                        <input type='text' 
                        value={this.state.input}
                        onChange={this.handleInputChange}/>
                    </div>
                    <button className="ui button" type="submit">Post</button>
                </form> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({user: state.users.currentUser})
}

export default connect(mapStateToProps, { createPost })(InputField)
