import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'

const Chat = props => {
    //button will direct to chat route
    const relatedMessages = props.messages.filter( message => message.sender_id === props.currentUser.id && message.recipient_id === props.location.state.followedId) //pass followedID as prop from button
    const messagesJSX = relatedMessages.map( message => {
        return <Message key={message.id} content={message.content}/>
    })

    return (
        //get all messages from backend and store in store - done
        //make inbox component that displays all messages? - do this last
        //iterate through all messages to match the two users through sender_id and user_id
        //make a message component that renders each message on the chat page
        //have input at bottom of chat page with send button 
        //send button should make a post request to backend to create new message with sender_id === currentUser.id and recipient_id === followed_id
        //chat should be class component with state? need to send following user ID as prop? to chat component 
        //route is /users/id/messages?
        //chat component should be displaying all the messages between two users after clicking message button
        <div>
            {messagesJSX}
        
            
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        messages: state.messages.messages,
        currentUser: state.users.currentUser
    })
}

export default connect(mapStateToProps)(Chat)
