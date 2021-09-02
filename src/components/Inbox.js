import React from 'react'
import { connect } from 'react-redux'

const Inbox = props => {

    const usersMessages = props.messages.filter(message => message.sender_id === props.user.id || message.recipient_id === props.user.id)
    debugger
    
    return (
        <div>
            This is the inbox!
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        messages: state.messages.messages,
        user: state.users.currentUser
    })
}

export default connect(mapStateToProps)(Inbox)
