import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import RegisterPage from '../Authentication/RegisterPage'
import AllSyncs from '../../containers/AllSyncs'
import Syncs from '../../containers/Syncs'
import Logout from '../Authentication/Logout';
import PostFeed from '../../containers/PostFeed'
import Chat from '../Messages/Chat'
import Inbox from '../Inbox'

const Router = () => {
    return (
        <div>
            <Switch>
                {/* <Route exact path='/' component={ (routeInfo) => <Login routeInfo={routeInfo} />} /> */}
                {/* <Route exact path='/signup' component={RegisterPage}/> */}
                <Route exact path='/' component={ (routeInfo) => <Home routeInfo={routeInfo} />} />
                <Route exact path='/users' component={AllSyncs} />
                <Route exact path='/signup' component={ (routeInfo) => <RegisterPage routeInfo={routeInfo} />} />
                <Route exact path='/followed' component={Syncs} />
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/posts' component={PostFeed} />
                <Route exact path='/messages' component={Inbox} />
                <Route exact path='/messages/:username' component={Chat} />
                
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

