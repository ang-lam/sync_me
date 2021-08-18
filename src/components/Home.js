import React from 'react'
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <div>
            {props.user.firstName}
        </div>
    )
}

const mapStateToProps = state => {
    return ({user: state.currentUser})
}

export default connect(mapStateToProps)(Home)
