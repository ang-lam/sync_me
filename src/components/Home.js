import React from 'react'
import { connect } from 'react-redux';
import UserCard from './UserCard';

const Home = (props) => {
    console.log('home:', props)
    const {firstName, lastName, company, bio} = props.user
    return (
        <div className="ui link cards">
            {/* Home <br />
            Name: {firstName} {lastName} <br />
            Comapny: {company} <br />
            Bio: {bio} */}
            < UserCard firstName={firstName} lastName={lastName} company={company} bio={bio}/>
        </div>
    )
}

const mapStateToProps = state => {
    return ({user: state.users.currentUser})
}

export default connect(mapStateToProps)(Home)
