import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        this.props.create(this.state.input, this.props.user, this.props.followedId)
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
                        onChange={this.handleInputChange}
                        placeholder={this.props.placeholder}
                        />
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

export default connect(mapStateToProps)(InputField)
