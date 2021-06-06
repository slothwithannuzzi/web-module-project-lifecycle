
import React from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'

import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      user: {},
      validUser: false
    }
  }

  componentDidMount() {
    console.log('App running')
    axios.get(`https://api.github.com/users/slothwithannuzzi`)
    .then(res => {
        console.log(res.data)
        })
    .catch(err => console.log(err))
    }
  

  getUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          user: res.data,
          validUser: true
        })
        })
      .catch(err => console.log('invalid user', err))
    }
  
    isValid = () => {
      if(this.state.validUser) {
        return (
          <div className = 'card-container'>
            <UserCard 
            username = {this.state.user.login} 
            userImg = {this.state.user.avatar_url} 
            url = {this.state.user.url}
            bio = {this.state.user.bio}
            followerCount = {this.state.user.followers}
            followingCount = {this.state.user.following}
            />
            <button onClick = {this.clearUser}>Clear User</button>
          </div>
        )
      }
    }

    clearUser = () => {
      this.setState({
        ...this.state,
        user: {},
        validUser: false
      })
    }
  
  
  render() {
    return (
    <div className="App">
        <UserForm getUser = {this.getUser} />
        { 
          this.isValid()
        }
    </div>
  )
    }
  }


export default App;
