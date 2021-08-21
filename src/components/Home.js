import React from 'react'
import { connect } from 'react-redux';
import UserCard from './UserCard';

const Home = (props) => {
    console.log('home:', props)
    const {firstName, lastName, company, bio} = props.user
    return (
        <div className="ui link cards">
            { props.loggedIn ? 
            < UserCard firstName={firstName} lastName={lastName} company={company} bio={bio}/> :
            null
            //add redirect if not logged in
            }

        </div>
    )
}

const mapStateToProps = state => {
    return ({user: state.users.currentUser, loggedIn: state.users.loggedIn})
}

export default connect(mapStateToProps)(Home)
