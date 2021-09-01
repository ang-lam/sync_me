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
        this.props.create(this.state.input, this.props.user)
        this.setState({
            input: ''
        })   
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        {/* this should be a prop */}
                        <label>{this.props.prompt}</label>
                        <input type='text' 
                        value={this.state.input}
                        onChange={this.handleInputChange}/>
                    </div>
                    <button className="ui button" type="submit">{this.props.button}</button>
                </form> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({user: state.users.currentUser})
}

export default connect(mapStateToProps, { createPost })(InputField)
