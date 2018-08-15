require ('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const c = require('./Controller/api_controller')
const middleware = require('./middleware/apiKey_middleware')
const cors = require('cors')
const path = require('path')

const corsOptions = {
  origin: '*'
}


const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) );


app.use(middleware)

const apiPath = 'API_PATH' in process.env ? process.env.API_PATH : '/api/gods'
const apiPathWithId = path.join(apiPath, ':id')
app.get(apiPath, c.get)
app.get(apiPathWithId, c.getOne)
app.put(apiPathWithId, c.put)
app.patch(apiPathWithId, c.patch)
app.post(apiPath, c.create)
app.delete(apiPathWithId, c.delete)
app.post(path.join(apiPath, 'reset'), c.reset)

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const SERVER_PORT = process.env.SERVER_PORT || 4000
app.listen( SERVER_PORT, () => {
  console.log( 'Speaking to the gods on port ' + SERVER_PORT)
})