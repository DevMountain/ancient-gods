require ('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const c = require('./Controller/api_controller')
const middleware = require('./middleware/apiKey_middleware')

const app = express()
app.use(bodyParser.json())

app.use(middleware)


app.get('/api/gods', c.get)
app.get('/api/gods/:id', c.getOne)
app.post('/api/gods', c.create)
app.patch('/api/gods/:id', c.update)
app.delete('/api/gods/:id', c.delete)


const PORT = 4000
app.listen( PORT, () => {
  console.log( 'Speaking to the gods on port ' + PORT)
})