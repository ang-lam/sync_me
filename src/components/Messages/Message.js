import React from 'react'
import { connect } from 'react-redux'
import '../../stylesheets/Message.css'

const Message = props => {
    const senderIsCurrentUser = props.sender.id === props.currentUser.id ? "currentUser" : "notCurrentUser"
    return (
        <div className="ui segment">
            <div className={`${senderIsCurrentUser}`}>
                <div className={`${senderIsCurrentUser}Name`}>
                     {props.sender.firstName} {props.sender.lastName}
                </div>
                    <div className={`${senderIsCurrentUser}Date`}>
                        3 days ago
                    </div>
                <div className={`${senderIsCurrentUser}Text`}>
                    <h4>{props.content}</h4>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return ({currentUser: state.users.currentUser})
}
export default connect(mapStateToProps)(Message)
