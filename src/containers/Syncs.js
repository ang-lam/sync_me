import React from 'react'
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'

const Syncs = props => {
    //add conditional based off mentee or mentor
    const allCardsJSX = props.user.followed.map( user => {
        return (
            <UserCard key={user.id}firstName={user.firstName} lastName={user.lastName} company={user.company} bio={user.bio} email={user.email} button="REMOVE"/>
        )
    })
    return (
        <div className="ui link cards">
            {allCardsJSX}
        </div>
    )
}

const mapStateToProps = state => {
    // return ({users: state.users.allUsers})
    return ({user: state.users.currentUser})
}

export default connect(mapStateToProps)(Syncs)
