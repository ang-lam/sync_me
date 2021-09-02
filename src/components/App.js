import React from 'react';
import Router from './Navigation/Router'
import NavBar from './Navigation/NavBar'

const App = () => {

    return (
        <div className="ui container">
            <NavBar />
            <Router />
        </div>
    )
    
}


export default App
