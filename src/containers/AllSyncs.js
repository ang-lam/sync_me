import React from 'react'
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'

const AllSyncs = props => {

    const allCardsJSX = props.users.map( user => {
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
    return ({users: state.users.allUsers})
}

export default connect(mapDispatchToProps)(AllSyncs)
