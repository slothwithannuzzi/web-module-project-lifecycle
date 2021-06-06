import React from 'react'
import '../styles/UserCard.css'

class UserCard extends React.Component {
   
    render() {
        return (
            <div className = 'user-card'>
                <div className = 'info-box'>
                <img className = 'user-img' src = {this.props.userImg}></img>
                    <div className = 'user-info'>
                        <h3>Username: {this.props.username}</h3>
                        <p>URL: {this.props.url}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;