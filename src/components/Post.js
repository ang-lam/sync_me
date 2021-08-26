import React from 'react'

const Post = props => {
    return (
        <div className="ui segment">
            <div className="content">
                <div className="summary">
                     {props.user.firstName} {props.user.lastName}
                    <div className="date">
                        3 days ago
                    </div>
                </div>
                <div className="extra text">
                    <h3>{props.content}</h3>
                </div>
                <div className="meta">
                    <i className="like icon"></i> 5 Likes
                </div>
            </div>
        </div>
    )
}

export default Post
