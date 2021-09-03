import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chatroom from './Chatroom'
import { fetchInbox } from '../../actions/messagesAction';


class Inbox extends Component {
    
    componentDidMount(){
        this.props.fetchInbox(this.props.user)
    }

    // chatroomJSX = () => {
    //     this.props.inboxUsers.map( user => {
    //     return <Chatroom key={user.id} user={user} history={this.props.history}/>
    // })}
    
    render(){
        return (
            <div>
                {this.props.inboxUsers.map( user => {
                    return <Chatroom key={user.id} user={user} history={this.props.history}/>
                })}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return ({
        user: state.users.currentUser,
        inboxUsers: state.messages.usersInInbox
    })
}

export default connect(mapStateToProps, { fetchInbox })(Inbox)
