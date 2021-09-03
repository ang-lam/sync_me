import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chatroom from './Chatroom'
import { fetchInbox } from '../../actions/messagesAction';
import { messageLoad } from '../../actions/messagesAction';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


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
            <div>
                {!!this.props.isLoading ?
                    (<div><Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /></div>)
                    :
                    chatroomJSX
                }
                
                {/* {this.props.inboxUsers.map( user => {
                    return <Chatroom key={user.id} user={user} history={this.props.history}/>
                })} */}
            </div>
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
