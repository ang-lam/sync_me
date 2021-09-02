import React from 'react'

const Post = props => {
    return (
        <div className="ui segment">
            <div className="content">
                <div className="author">
                     {props.user.firstName} {props.user.lastName}
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

export default Post
