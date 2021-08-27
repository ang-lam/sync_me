import React from 'react'
import { connect } from 'react-redux';
import AppInfo from './AppInfo';
import Login from './Login';
import title from '../images/sync_me_title.png'

const Home = (props) => {
    return (
        <div className="ui large feed">
            <img src={title} alt="title" />
            { !props.loggedIn ? 
                <Login routeInfo={props.routeInfo}/> : 
                <AppInfo />
            } {/* a component to render the site info */}
        </div>
    )
}

const mapStateToProps = state => {
    return ({loggedIn: state.users.loggedIn})
}

export default connect(mapStateToProps)(Home)
