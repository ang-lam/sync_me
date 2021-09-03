import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'
import InputField from '../InputField'
import { createMessage } from '../../actions/messagesAction'
import '../../stylesheets/Chat.css'

class Chat extends Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
      
    componentDidMount() {
    this.scrollToBottom();
    }
    
    componentDidUpdate() {
    this.scrollToBottom();
    }

    createChatroom = (content, sender, recipient) => {
        this.props.createMessage(content, sender, recipient)
    }

    render() {
        const currentUsersMessages = this.props.messages.filter( message => message.sender_id === this.props.currentUser.id || message.recipient_id === this.props.currentUser.id)
        const relatedMessages = currentUsersMessages.filter( message => message.sender_id === this.props.location.state.followed.id || message.recipient_id === this.props.location.state.followed.id)
        const messagesJSX = relatedMessages.map( message => {
            return <Message key={message.id} content={message.content} sender={message.sender} message={message}/>
        })
        const MessageForPrompt = `Send a message to ${this.props.location.state.followed.firstName} ${this.props.location.state.followed.lastName}`
        return (
        
            //validate login/registration - error messages
            
            //see if can update messages 
            //messages should have a read attribute? true/false to keep track of alerts

            <>
                <div className="ui raised segments messages">  
                    {messagesJSX}   
                </div>
                <div className="MessageFooter">
                    <InputField button="Send" create={this.createChatroom} followedId={this.props.location.state.followed.id} placeholder="Enter your message..." prompt={MessageForPrompt}/>
                </div>
                <div className="emptyDiv">
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
