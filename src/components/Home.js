import React from 'react'
import { connect } from 'react-redux';

const Home = (props) => {
    console.log('home:', props)
    const {firstName, lastName, company, bio} = props.user
    return (
        <div>
            Home <br />
            Name: {firstName} {lastName} <br />
            Comapny: {company} <br />
            Bio: {bio}
        </div>
    )
}

const mapStateToProps = state => {
    return ({user: state.users.currentUser})
}

export default connect(mapStateToProps)(Home)
