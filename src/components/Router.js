import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
//import the containers for the 

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/test' />
            </Switch>
            
        </div>
    )
}

export default Router

