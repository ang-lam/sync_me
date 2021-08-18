import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from './Router'
import NavBar from './NavBar'
import { fetchUsers } from '../actions/usersActions'

class App extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    }
    render (){
        return (
            <div className="ui container">
                <NavBar />
                <Router />
            </div>
        )
    }
    
}


export default connect(null, {fetchUsers})(App)
