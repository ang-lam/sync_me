import React from 'react'
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import { buttonAction } from '../actions/usersActions'


const Syncs = props => {
    //add conditional based off mentee or mentor
    const allCardsJSX = props.followed.map( user => {
        return (
            <UserCard id={user.id}firstName={user.firstName} lastName={user.lastName} company={user.company} bio={user.bio} email={user.email} handleButton={props.buttonAction} button="UNFOLLOW" currentUser={props.currentUser}/>
        )
    })
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
    // return ({users: state.users.allUsers})
    return ({followed: state.users.followed, 
            loggedIn: state.users.loggedIn,
            currentUser: state.users.currentUser
        })
}

export default connect(mapStateToProps, { buttonAction })(Syncs)
