import React from 'react'

const SyncedCard = props => {
    return (
        <div class="card" key={props.id}>
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
                    {props.email}
                </span>
                <span className="right floated">
                    <button className="ui basic button">
                        <i class="icon user"></i>
                        REMOVE
                    </button>
                </span>
            </div>
        </div>
    )
}

export default SyncedCard
