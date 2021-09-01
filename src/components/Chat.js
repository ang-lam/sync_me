import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'
import InputField from './InputField'
import { createMessage } from '../actions/messagesAction'
import '../stylesheets/Chat.css'

class Chat extends Component {
    //button will direct to chat route

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
      
    componentDidMount() {
    this.scrollToBottom();
    }
    
    componentDidUpdate() {
    this.scrollToBottom();
    }

    render() {
        const currentUsersMessages = this.props.messages.filter( message => message.sender_id === this.props.currentUser.id || message.recipient_id === this.props.currentUser.id)
        const relatedMessages = currentUsersMessages.filter( message => message.sender_id === this.props.location.state.followedId || message.recipient_id === this.props.location.state.followedId)
        const messagesJSX = relatedMessages.map( message => {
            return <Message key={message.id} content={message.content} sender={message.sender}/>
        })
        return (
            
            //get all messages from backend and store in store - done
            //iterate through all messages to match the two users through sender_id and user_id -done
            //make a message component that renders each message on the chat page - done
            //have input at bottom of chat page with send button - done
            //send button should make a post request to backend to create new message with sender_id === currentUser.id and recipient_id === followed_id
                //do this by refactoring input field to get a callback as a prop and do dispatch in the container of the input field
                //done
            //update state after posting new messsage to render new message -done
    
            //route is /users/id/messages?
            //let users create username to make chat message url to /messages/username
            //anchor input field at bottom of page
            //see if can update messages 
            //messages should have a read attribute? true/false to keep track of alerts
    
            //make inbox component that displays all messages? - do this last
            //if message sender is currentUser send a prop to differentiate else send another prop so can style
            //check login
            <>
                <div className="ui raised segments messages">  
                    {messagesJSX}   
                </div>
                <div className="footer">
                    <InputField button="Send" create={this.props.createMessage} followedId={this.props.location.state.followedId}/>
                </div>
                <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </>
        )
    }
    
}

const mapStateToProps = state => {
    return ({
        messages: state.messages.messages,
        currentUser: state.users.currentUser
    })
}

export default connect(mapStateToProps, { createMessage })(Chat)
