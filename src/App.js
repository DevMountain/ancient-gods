import React, { Component } from 'react';
import landing from './assets/landing.png'
import get_request from './assets/get_request.png'
import get_one from './assets/get_one.png'
import patch_request from './assets/patch_request.png'
import post_request from './assets/post_request.png'
import post_request2 from './assets/post_request2.png'
import delete_request from './assets/delete.png'
import patch_request2 from './assets/patch_request2.png'

import axios from 'axios'

class App extends Component {

  componentDidMount(){
    let config = {
      headers: {
        apikey: 'helloworld',
      }
    }
		axios.get('https://ancient-gods-api.now.sh/api/gods', config)
			.then( e => {
				console.log( 'gods array', e.data )
			})
			.catch( e => {
				console.log( 'error', e)
      })
    axios.get('https://ancient-gods-api.now.sh/api/gods/1', config)
      .then( e => {
        console.log( 'first god', e)
      })
      .catch( e => {
        console.log( 'error', e)
      })
  }
  
  render() {
    return (
      <div>
        <h1>Welcome to the DevMountain Gods API</h1>
          <h5>To utilize the API, we'll be using Postman, you can find the link here : <a href="https://www.getpostman.com/" name="hello">Postman Site</a></h5>
          <ul>
            <li>Step 1: Open Postman and click the "X" on the top right of the focus window</li>
            <details>
              <summary><i>Landing Page Example</i></summary>
              <img src={landing} alt="landing page"/>
            </details>
            <br/>
            <br/>
            ****<strong><i>IMPORTANT NOTE</i></strong> - it is important to have your own unique key for all requests so your request isn't affected by others****
            <br/>
            <br/>
            <li><strong>GET</strong> request
              <br/>
                - Part 1: Select <strong>'Get'</strong> and type the <strong>FULL</strong> endpoint ( ie: https://ancient-gods-api.now.sh/api/gods )
              <br/>
                - Part 2: Select <strong>'Headers'</strong> and add 'apikey' to the key field, followed by a unique word/phrase in the value field
              <br/>
              
            <details>
              <summary><i>Get Request with Header</i></summary>
              <img src={get_request} alt="get_request"/>
            </details>
            </li>
            <br/>
            <li><strong>GET ONE</strong> request
              <br/>
                - Part 1: Select <strong>'Get'</strong> and type the <strong>FULL</strong> endpoint ( ie: https://ancient-gods-api.now.sh/api/gods/:id ..where :id is a placeholder)
              <br/>
                - Part 2: Select <strong>'Headers'</strong> and add 'apikey' to the key field, followed by a unique word/phrase in the value field
              <br/>
                {/* - <strong>Note</strong> it is important to have your own unique word to ensure your experience isn't affected by others */}
            <details>
              <summary><i>Get Request with Header</i></summary>
              <img src={get_one} alt="get_request"/>
            </details>
            </li>
            <br/>
            <li><strong>PATCH</strong> request
              <br/>
                - Part 1: Select <strong>'PATCH'</strong> and type the <strong>FULL</strong> endpoint ( ie: https://ancient-gods-api.now.sh/api/gods/:id ..where :id is a placeholder)
              <br/>
                - Part 2: Select <strong>'Headers'</strong> and add 'apikey' to the key field, followed by a unique word/phrase in the value field
              <br/>
                {/* - <strong>Note</strong> it is important to have your own unique word to ensure your experience isn't affected by others */}
              <details>
                <summary><i>Patch Request Header Page</i></summary>
                <img src={patch_request} alt="patch_request"/>
              </details>
              <details>
                <summary><i>Patch Request Body Page</i></summary>
                <img src={patch_request2} alt="patch_request2"/>
              </details>
            </li>
            <br/>
            <li><strong>POST</strong> request
              <br/>
                - Part 1: Select <strong>'POST'</strong> and type the <strong>FULL</strong> endpoint ( ie: https://ancient-gods-api.now.sh/api/gods )
              <br/>
                - Part 2: Select <strong>'Headers'</strong> and add 'apikey' to the key field, followed by a unique word/phrase in the value field
              <br/>
                - Part 3: Create your god using the <strong>BODY</strong> tab, raw radio button, and JSON input type
              <details>
                <summary><i>Post Request Header Page</i></summary>
                <img src={post_request} alt="post_request"/>
              </details>
              <details>
                <summary><i>Post Request Body Page</i></summary>
                <img src={post_request2} alt="post_request2"/>
              </details>
            </li>
            <br/>
            <li><strong>DELETE</strong> request
              <br/>
                - Part 1: Select <strong>'DELETE'</strong> and type the <strong>FULL</strong> endpoint ( ie: https://ancient-gods-api.now.sh/api/gods/:id ..where :id is a placeholder)
              <br/>
                - Part 2: Select <strong>'Headers'</strong> and add 'apikey' to the key field, followed by a unique word/phrase in the value field
              <br/>
                {/* - <strong>Note</strong> it is important to have your own unique word to ensure your experience isn't affected by others */}
              <details>
                <summary><i>Delete Request Header Page</i></summary>
                <img src={delete_request} alt="delete_request"/>
              </details>
            </li>
          </ul>
      </div>
    )
  }
}

export default App;