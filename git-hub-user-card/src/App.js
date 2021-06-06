import logo from './logo.svg';
import React from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'

import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      user: {}
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
          user: res.data
        })
        })
      .catch(err => console.log('invalid user', err))
    }
  
  
  
  
  render() {
    return (
    <div className="App">
        <UserForm getUser = {this.getUser}/>
        <UserCard username = {this.state.user.login}/>
    </div>
  )
    }
  }


export default App;
