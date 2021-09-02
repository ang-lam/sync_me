import React from 'react'

const UserCard = props => {
    

    return (
        //className='ui link cards' for wrapping component
        <div className="card">
            <div className="image">
                <img src="https://i.pinimg.com/originals/28/d4/62/28d462f90eca234062f8a2ebba8c8fe1.jpg" alt="avatar"/>
            </div>
            <div className="content">
                <div className="header">{props.firstName} {props.lastName}</div>
                <div className="meta">
                    {props.company}
                </div>
                <div className="description">
                    {props.bio}
                </div>
            </div>
            <div className="extra content">
                <span className="left floated">
                {props.messageButton ? 
                (<button className="ui basic button" onClick={(e) => props.handleMessageButton(props.id, props.firstName)}>
                        {props.messageButton}
                </button>) : null
                }
                </span>
                <span className="right floated">
                    <button className="ui basic button" onClick={(e) => props.handleButton(e.target.innerText, props.id, props.currentUser.id)}>
                        <i className="icon user"></i>
                        {props.button}
                    </button>
                </span>
            </div>
        </div>
    )
}

export default UserCard
