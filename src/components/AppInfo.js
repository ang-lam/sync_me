import React from 'react'
import '../stylesheets/AppInfo.css'

const AppInfo = () => {
    return (
        <div className="ui segment">
            <p>Sync, short for synchronize, means to happen at the same time.</p>
            <p>Sync Me is social media for all techies. Connect with your fellow techies in the world and follow what they have to say.</p>
            <a href="https://www.github.com/ang-lam" target="_blank" rel="noreferrer">
                <i className="github large icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/anglam" target="_blank" rel="noreferrer">
                <i className="linkedin large icon"></i>
            </a>
        </div>
    )
}

export default AppInfo
