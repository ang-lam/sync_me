import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { login } from '../actions/usersActions'
import Home from '../components/Home'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'

//import the containers for the 

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route exact path='/signup' component={RegisterPage}/>
                <Route exact path='/home' component={Home} />
            </Switch>
            
        </div>
    )
}

export default Router

