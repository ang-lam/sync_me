import React from 'react'
import { connect } from 'react-redux';
import AppInfo from './AppInfo';
import Login from './Login';

const Home = (props) => {
    return (
        <div className="ui large feed">
            
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
