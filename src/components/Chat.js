import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'
import InputField from './InputField'

const Chat = props => {
    //button will direct to chat route
    const currentUsersMessages = props.messages.filter( message => message.sender_id === props.currentUser.id || message.recipient_id === props.currentUser.id) //pass followedID as prop from button
    // const followedUsersMessages = props.messages.filter( message => message.sender_id === props.location.state.followedId && message.recipient_id === props.currentUser.id)
    // const relatedMessages = currentUsersMessages.concat(followedUsersMessages)
    const relatedMessages = currentUsersMessages.filter( message => message.sender_id === props.location.state.followedId || message.recipient_id === props.location.state.followedId)
    const messagesJSX = relatedMessages.map( message => {
        return <Message key={message.id} content={message.content} sender={message.sender}/>
    })

    return (
        //get all messages from backend and store in store - done
        //iterate through all messages to match the two users through sender_id and user_id -done
        //make a message component that renders each message on the chat page - done

        //have input at bottom of chat page with send button - working on it
        //send button should make a post request to backend to create new message with sender_id === currentUser.id and recipient_id === followed_id
            //do this by refactoring input field to get a callback as a prop and do dispatch in the container of the input field
        //route is /users/id/messages?
        //update state after posting new messsage to render new message

        //make inbox component that displays all messages? - do this last
        //if message sender is currentUser send a prop to differentiate else send another prop so can style
        <div>
            
            {messagesJSX}
            <InputField button="Send"/>
        
            
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
