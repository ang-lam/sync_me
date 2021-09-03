import React from 'react'

const Chatroom = props => {
    const sortByRecent = props.user.messages.reverse()
    const lastMessage = sortByRecent.find( message => message.sender_id === props.user.id || message.recipient_id === props.user.id)
    
    const handleClick = (username, user) => {
        props.history.push(`/messages/${username}`, {
            followed: user
        })
    }
    return (
        <div className="ui segment" onClick={() => handleClick(props.user.username, props.user)}>
            <h3>{props.user.firstName} {props.user.lastName}</h3>
            <div></div>
            {lastMessage.content}
        </div>
    )
}

export default Chatroom
