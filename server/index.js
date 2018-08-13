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


app.get(`${process.env.API_PATH}/`, c.get)
app.get(`${process.env.API_PATH}/:id`, c.getOne)
app.put(`${process.env.API_PATH}/:id`, c.put)
app.patch(`${process.env.API_PATH}/:id`, c.patch)
app.post(`${process.env.API_PATH}/:id`, c.create)
app.delete(`${process.env.API_PATH}/:id`, c.delete)
app.post(`${process.env.API_PATH}/reset`, c.reset)

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = process.env.PORT || 4000
app.listen( PORT, () => {
  console.log( 'Speaking to the gods on port ' + PORT)
})