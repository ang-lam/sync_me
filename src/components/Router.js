import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import AuthRoute from './AuthRoute'
import AllSyncs from '../containers/AllSyncs'
import Syncs from '../containers/Syncs'

//import the containers for the 

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ (routeInfo) => <LoginPage routeInfo={routeInfo} />} />
                {/* <Route exact path='/signup' component={RegisterPage}/> */}
                <Route exact path='/home' component={Home} />
                <Route exact path='/connect' component={AllSyncs} />
                <Route exact path='/signup' component={ (routeInfo) => <RegisterPage routeInfo={routeInfo} />} />
                <Route exact path='/syncs' component={Syncs} />
                {/* <AuthRoute exact path='/'>
                    <LoginPage />
                </AuthRoute> */}
                {/* <AuthRoute exact path='/signup'>
                    <RegisterPage />
                </AuthRoute> */}
                {/* <AuthRoute exact path='/home' type='private'>
                    <Home />
                </AuthRoute> */}
            </Switch>
            
        </div>
    )
}

export default Router

