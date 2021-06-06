
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
      followerList: [],
      validUser: false
    }
  }

  componentDidMount() {
    console.log('App running')
    axios.get(`https://api.github.com/users/slothwithannuzzi/followers`)
    .then(res => {
        // console.log(res.data)
        })
    .catch(err => console.log(err))
    }
  

  getUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
        this.setState({
          ...this.state,
          user: res.data,
          validUser: true
        })
        })
      .catch(err => console.log('invalid user', err))
    }

    getFollowers = user => {
      axios.get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
          this.setState({
            ...this.state,
            followerList: res.data
          })
          })
        .catch(err => console.log('invalid user', err))
        console.log(this.state.followerList)
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
            followerList = {this.state.followerList}
            getUser = {this.getUser}
            getFollowers = {this.getFollowers}
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
        <UserForm 
        getUser = {this.getUser} 
        getFollowers = {this.getFollowers}
        />
        { 
          this.isValid()
        }
    </div>
  )
    }
  }


export default App;
