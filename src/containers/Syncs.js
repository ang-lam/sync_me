import React from 'react'
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'

const AllSyncs = props => {
    //add conditional based off mentee or mentor
    const allCardsJSX = props.user.mentors.map( user => {
        return (
            <UserCard key={user.id}firstName={user.firstName} lastName={user.lastName} company={user.company} bio={user.bio} />
        )
    })
    return (
        <div className="ui link cards">
            {allCardsJSX}
        </div>
    )
}

const mapDispatchToProps = state => {
    // return ({users: state.users.allUsers})
    return ({user: state.users.currentUser})
}

export default connect(mapDispatchToProps)(AllSyncs)
