import React from 'react'
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import { buttonAction } from '../actions/usersActions'

const AllSyncs = props => {

    const removeUsers = props.allUsers.filter(user => {
        const userIds = props.followed.map(user => user.id)
        return !userIds.includes(user.id) && user.id !== props.currentUser.id
    })
    const allCardsJSX = removeUsers.map( user => {
        return (
            <UserCard id={user.id} firstName={user.firstName} lastName={user.lastName} company={user.company} bio={user.bio} button="SYNC" handleButton={props.buttonAction} currentUser={props.currentUser} />
        )
    })

    //import action here 
    return (
        <div className="ui link cards">
            { props.loggedIn ?
            allCardsJSX :
            props.history.push('/')
            }
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        loggedIn: state.users.loggedIn,
        allUsers: state.users.allUsers,
        currentUser: state.users.currentUser,
        followed: state.users.followed
    })
}

export default connect(mapStateToProps, {buttonAction})(AllSyncs)
