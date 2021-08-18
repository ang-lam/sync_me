import React from 'react'
import Router from './Router'
import NavBar from './NavBar'
import RegisterPage from './RegisterPage'

const App = () => {
    return (
        <div className="ui container">
            <NavBar />
            <RegisterPage />
            <Router />
        </div>
    )
}

export default App
