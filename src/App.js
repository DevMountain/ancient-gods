import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
      this.state = {
        active: '',
        apiKey: ''
      }
    this.addUser = this.addUser.bind(this)
    this.handle = this.handle.bind(this)
    this.getGods = this.getGods.bind(this)
  }

  addUser(){
    this.setState({
      active: this.state.apiKey
    })
  }

  handle(key,val){
    this.setState({
      [key]: val
    })
  }

  getGods(){
    const headers = {
      apikey: this.state.active
    }
    axios.get('/api/gods', {headers})
      .then( res => {
        console.log(res.data)
      })
      .catch( e => console.log( 'error', e))
  }
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="unique key" onChange={e => this.handle('apikey', e.target.value)}/>
        <input type="submit" value="add user" onClick={this.addUser}/>
          <div>
            <button onClick={this.getGods}>receive gods</button>
          </div>
      </div>
    );
  }
}

export default App;