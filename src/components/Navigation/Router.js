import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import RegisterPage from '../Authentication/RegisterPage'
import AllSyncs from '../Connections/AllSyncs'
import Syncs from '../Connections/Syncs'
import Logout from '../Authentication/Logout';
import PostFeed from '../Posts/PostFeed'
import Chat from '../Messages/Chat'
import Inbox from '../Messages/Inbox'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ (routeInfo) => <Home routeInfo={routeInfo} />} />
                <Route exact path='/users' component={AllSyncs} />
                <Route exact path='/signup' component={ (routeInfo) => <RegisterPage routeInfo={routeInfo} />} />
                <Route exact path='/followed' component={Syncs} />
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/posts' component={PostFeed} />
                <Route exact path='/users/:username/inbox' component={Inbox} />
                <Route exact path='/messages/:username' component={Chat} />
            </Switch>
            
        </div>
    )
}
    
export default Router

