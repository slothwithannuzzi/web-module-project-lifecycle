import axios from 'axios';
import React from 'react'

class FollowerList extends React.Component {

    render() {
        return (
            <div className = 'follower-list'>
                {this.props.list.map(follower => (
                    <div className = 'follower-card' key = {follower.id}>
                        {follower.login}
                    </div>
                ))}
            </div>
        )
    }
}

export default FollowerList;