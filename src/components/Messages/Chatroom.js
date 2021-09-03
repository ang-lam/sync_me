import React from 'react'
import { connect } from 'react-redux'
import '../../stylesheets/Chatroom.css'

const Chatroom = props => {
    const sortByRecent = props.user.messages.reverse()
    const lastMessage = sortByRecent.find( message => message.sender_id === props.user.id || message.recipient_id === props.user.id)
    const lastSender = lastMessage.sender_id === props.currentUser.id ? props.currentUser.firstName : props.user.firstName
    const handleClick = (username, user) => {
        props.history.push(`/messages/${username}`, {
            followed: user
        })
    }
    return (
        <div className="ui segment chat" onClick={() => handleClick(props.user.username, props.user)}>
            <h3>{props.user.firstName} {props.user.lastName}</h3>
            <div></div>
            <p>{lastSender}: {lastMessage.content}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        currentUser: state.users.currentUser
    })
}

export default connect(mapStateToProps)(Chatroom)
