import React from 'react'

const Message = props => {
    return (
        <div className="ui segment">
            <div className="content">
                <div className="author">
                     {props.sender.firstName} {props.sender.lastName}
                </div>
                    <span className="date">
                        3 days ago
                    </span>
                <div className="ui segment">
                    <h4>{props.content}</h4>
                </div>
            </div>
        </div>
    )
}

export default Message
