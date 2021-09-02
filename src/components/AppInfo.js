import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchInbox } from '../actions/messagesAction';
import '../stylesheets/AppInfo.css'

class AppInfo extends Component {

    componentDidMount(){
        this.props.fetchInbox(this.props.user)
    }
    
    render() {
        return (
            <div className="ui segment">
                <p>Sync, short for synchronize, means to happen at the same time. There are thousands of other techies like you waiting to connect.</p>
                <p>Sync Me is social media for all techies to sync with each other and share their knowledge and thoughts. Connect with your fellow techies in the world and follow what they have to say.</p>
                <p><a href="https://www.github.com/ang-lam" target="_blank" rel="noreferrer">
                    <i className="github large icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/anglam" target="_blank" rel="noreferrer">
                    <i className="linkedin large icon"></i>
                </a></p>
            </div>
        )
    } 
    
}

const mapStateToProps = state => {
    return ({
        user: state.users.currentUser
    })
}

export default connect(mapStateToProps, { fetchInbox })(AppInfo)
