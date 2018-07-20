import React, { Component } from 'react';
import axios from 'axios'
import { router } from 'sw-toolbox';

class App extends Component {
  constructor(){
    super()
      this.state = {
        users: [],
        username: '',
        apikey: ''
      }
    this.addUser = this.addUser.bind(this)
    this.handle = this.handle.bind(this)
    this.getGods = this.getGods.bind(this)
  }


  addUser(){
    this.setState({
      users: [...this.state.users, {name: this.state.username, apikey: this.state.apikey }]
    })
  }

  handle(key,val){
    this.setState({
      [key]: val
    })
  }

  getGods(){
    const headers = {
      apikey: this.state.apikey
    }
    axios.get('/api/gods/get', {headers})
      .then( res => {
        console.log(res.data)
      })
      .catch( e => console.log( 'error', e))
  }
  render() {
    let allUsers = this.state.users.map( (e,i) => <p key={i}>{e.name}</p>)
    // console.log(allUsers);
    // console.log(this.state.username)
    // console.log(this.state.users)
    console.log('test')
    return (
      <div className="App">
      <div className="username">
      <input type="text" placeholder="enter your name" onChange={e => this.handle('username', e.target.value)}/>
      <input type="text" placeholder="unique key" onChange={e => this.handle('apikey', e.target.value)}/>
      <input type="submit" value="add user" onClick={this.addUser}/>
      <div>
      <button onClick={this.getGods}>receive gods</button>
      </div>
      </div>
      {allUsers}
      </div>
    );
  }
}

export default App;