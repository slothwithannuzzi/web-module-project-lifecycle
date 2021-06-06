import axios from 'axios';
import React from 'react'

class FollowerList extends React.Component {

    
    render() {
        return (
            <div>
                Followers:
                {this.props.list.map(follower => (
                    <div>{follower.login}</div>
                ))}
            </div>
        )
    }
}

export default FollowerList;