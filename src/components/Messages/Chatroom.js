import React from 'react'

const Chatroom = props => {
    const sortByRecent = props.user.messages.reverse()
    const lastMessage = sortByRecent.find( message => message.sender_id === props.user.id || message.recipient_id === props.user.id)
    

    return (
        <div className="ui segment">
            <h3>{props.user.firstName} {props.user.lastName}</h3>
            <div></div>
            {lastMessage.content}
        </div>
    )
}

export default Chatroom
