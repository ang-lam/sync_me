import React from 'react'
import { connect } from 'react-redux'
import Chatroom from './Chatroom'


const Inbox = props => {

    
    return (
        <div>
            <Chatroom />
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        user: state.users.currentUser,
        inboxUsers: state.messages.usersInInbox
    })
}

export default connect(mapStateToProps)(Inbox)
