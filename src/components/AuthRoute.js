import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

const AuthRoute = props => {
    const { currentUser, type } = props;
    if (type === 'private' && !currentUser) return <Redirect to='/' />;
    else return <Route {...props} />
}

const mapStateToProps = ( {currentUser} ) => ({
    currentUser
})

export default connect(mapStateToProps)(AuthRoute)
