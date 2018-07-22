import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
      this.state = {
        active: '',
        apiKey: ''
      }
    this.setApiKey = this.setApiKey.bind(this)
    this.handle = this.handle.bind(this)
    this.getGods = this.getGods.bind(this)
  }

  setApiKey(){
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
    console.log(this.state)
    return (
      <div className="App">
        <input type="text" placeholder="enter a Unique API key" onChange={e => this.handle('apiKey', e.target.value)}/>
        <input type="submit" value="submit key" onClick={this.setApiKey}/>
          <div>
            <button onClick={this.getGods}>receive gods</button>
          </div>
      </div>
    );
  }
}

export default App;