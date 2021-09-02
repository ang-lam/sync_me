import React from 'react'
import { connect } from 'react-redux'
import Chatroom from './Chatroom'


const Inbox = props => {

    const chatroomJSX = props.inboxUsers.map( user => {
        return <Chatroom key={user.id} user={user}/>
    })
    
    return (
        <div>
            {chatroomJSX}
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
