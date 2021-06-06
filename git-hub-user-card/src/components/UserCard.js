import React from 'react'
import axios from 'axios'
import '../styles/UserCard.css'
import Followers from './FollowerList'

class UserCard extends React.Component {
    
    constructor () {
        super();
        this.state = {
            followers: false
        }
    }

    // toggleFollowers = () => {
    //     this.setState = {
    //         ...this.state,
    //         followers: true
    //     }
    // }

    // showFollowers = () => {
    //     if(this.state.followers === true) {
    //         return (
    //             <div>
    //             <Followers />
    //             </div>
    //         )
    //     }
    // }

    
    render() {
        return (
            <div className = 'user-card'>
                {/* {this.getFollowers(this.props.username)} */}
                <div className = 'info-box'>
                    <img className = 'user-img' src = {this.props.userImg}></img>
                    <div className = 'user-info'>
                        <h3>Username: {this.props.username}</h3>
                        <p>URL: {this.props.url}</p>
                        <p>Followers: {this.props.followerCount}</p>
                        <p>Following: {this.props.followingCount}</p>
                    </div>
                </div>
                <div className = 'bio'>
                    <p>{this.props.bio}</p>
                </div>
                {/* <button onClick = {this.toggleFollowers}>Show Followers</button>
                {this.showFollowers()} */}
            </div>
        )
    }
}

export default UserCard;