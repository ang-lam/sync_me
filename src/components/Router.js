import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import AuthRoute from './AuthRoute'

//import the containers for the 

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ (routeInfo) => <LoginPage routeInfo={routeInfo} />} />
                {/* <Route exact path='/signup' component={RegisterPage}/> */}
                <Route exact path='/home' component={Home} />
                {/* <AuthRoute exact path='/'>
                    <LoginPage />
                </AuthRoute> */}
                <AuthRoute exact path='/signup'>
                    <RegisterPage />
                </AuthRoute>
                {/* <AuthRoute exact path='/home' type='private'>
                    <Home />
                </AuthRoute> */}
            </Switch>
            
        </div>
    )
}

export default Router

