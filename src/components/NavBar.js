import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ui segment">
            <Link to='/home'>Home</Link> |
            <Link to='/syncs'>Syncs</Link> |
            <Link to='/connect'>Sync</Link> |
            <Link to='/'>Login for test</Link> |
        </div>
    )
}

export default NavBar
