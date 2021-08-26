import React, { Component } from 'react'

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
        this.props.onSearchSubmit(this.state.input)   
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

export default InputField
