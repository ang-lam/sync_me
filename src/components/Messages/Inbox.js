import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chatroom from './Chatroom'
import { fetchInbox } from '../../actions/messagesAction';
import { messageLoad } from '../../actions/messagesAction';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../../stylesheets/Inbox.css'


class Inbox extends Component {
    
    componentDidMount(){
        this.props.fetchInbox(this.props.user)
    }

    componentWillUnmount(){
        this.props.messageLoad()
    }
    
    render(){
        const chatroomJSX = this.props.inboxUsers.map( user => {
            return <Chatroom key={user.id} user={user} history={this.props.history}/>
        })
        return (
            <>
                {!!this.props.isLoading ?
                    (<div className="loader"><Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /></div>)
                    :
                    <div className="ui raised segments messages">{chatroomJSX}</div>
                }
                
                {/* {this.props.inboxUsers.map( user => {
                    return <Chatroom key={user.id} user={user} history={this.props.history}/>
                })} */}
            </>
        )
    }
    
}

const mapStateToProps = state => {
    return ({
        user: state.users.currentUser,
        inboxUsers: state.messages.usersInInbox,
        isLoading: state.messages.isLoading
    })
}

export default connect(mapStateToProps, { fetchInbox, messageLoad })(Inbox)
