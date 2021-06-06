import React from 'react'

class UserCard extends React.Component {
   
    render() {
        return (
            <div>
                <h1>User: {this.props.username}</h1>
                <img src = {this.props.userImg}></img>
            </div>
        )
    }
}

export default UserCard;