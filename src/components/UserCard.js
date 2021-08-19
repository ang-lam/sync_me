import React from 'react'
import { connect } from 'react-redux'

const UserCard = props => {
    return (
        //className='ui link cards' for wrapping component
        <div class="card">
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
                <span className="right floated">
                    <button>SYNC</button>
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(UserCard)
