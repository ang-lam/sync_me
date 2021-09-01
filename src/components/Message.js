import React from 'react'

const Message = props => {
    return (
        <div className="ui segment">
            {props.content}
        </div>
    )
}

export default Message
