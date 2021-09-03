import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'
import { buttonAction } from '../../actions/usersActions'


const Syncs = props => {
    //add conditional based off mentee or mentor

    const handleMessageButton = (followed, username) => {
        props.history.push(`/messages/${username}`, {
            followed: followed
        })
    }

    const allCardsJSX = props.followed.map( user => {
        return (
            <UserCard key={user.id} user={user} id={user.id} username={user.username} firstName={user.firstName} lastName={user.lastName} company={user.company} bio={user.bio} email={user.email} handleButton={props.buttonAction} handleMessageButton={handleMessageButton} button="UNFOLLOW" messageButton="MESSAGE" currentUser={props.currentUser}/>
        )
    })

    const noFollowed = props.followed.length !== 0 ? allCardsJSX : alert('You are not following anyone! Go to Find A Sync to follow people!')

    return (
        <div className="ui link cards">
            { props.loggedIn ?
            noFollowed :
            props.history.push('/')
            }
        </div>
    )
}

const mapStateToProps = state => {
    // return ({users: state.users.allUsers})
    return ({followed: state.users.followed, 
            loggedIn: state.users.loggedIn,
            currentUser: state.users.currentUser
        })
}

export default connect(mapStateToProps, { buttonAction })(Syncs)
