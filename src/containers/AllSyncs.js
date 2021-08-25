import React from 'react'
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import { buttonAction } from '../actions/usersActions'

const AllSyncs = props => {

    const allCardsJSX = props.usersState.allUsers.map( user => {
        return (
            <UserCard id={user.id} firstName={user.firstName} lastName={user.lastName} company={user.company} bio={user.bio} button="SYNC" handleButton={props.buttonAction} currentUser={props.usersState.currentUser} />
        )
    })

    //import action here 
    return (
        <div className="ui link cards">
            { props.usersState.loggedIn ?
            allCardsJSX :
            props.history.push('/')
            }
        </div>
    )
}

const mapStateToProps = state => {
    return ({usersState: state.users})
}

export default connect(mapStateToProps, {buttonAction})(AllSyncs)
