import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/usersActions'
import '../../stylesheets/Logout.css'

const Logout = (props) => {
    
    const handleYesClick = () => {
        localStorage.removeItem('token');
        props.logoutUser();
        props.history.push('/')
    }

    const handleNoClick = () => {
        props.history.goBack()
    }
    
    return ( 
        <div className="ui segment">
            <h3><br/>
                Are you sure you want to logout? <br/> <br/>
                <button className="ui button" onClick={handleYesClick}>Yes</button>
                <button className="ui button" onClick={handleNoClick}>No</button>
            </h3>
        </div>
    )
}

export default connect(null, {logoutUser})(Logout)
