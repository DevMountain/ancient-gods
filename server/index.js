require ('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const c = require('./Controller/api_controller')
const middleware = require('./middleware/apiKey_middleware')
const cors = require('cors')

const corsOptions = {
  origin: '*'
}


const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) );


app.use(middleware)

const apiPath = process.env.API_PATH || '/api/gods'
app.get(`${apiPath}`, c.get)
app.get(`${apiPath}/:id`, c.getOne)
app.put(`${apiPath}/:id`, c.put)
app.patch(`${apiPath}/:id`, c.patch)
app.post(`${apiPath}/:id`, c.create)
app.delete(`${apiPath}/:id`, c.delete)
app.post(`${apiPath}/reset`, c.reset)

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = process.env.PORT || 4000
app.listen( PORT, () => {
  console.log( 'Speaking to the gods on port ' + PORT)
})