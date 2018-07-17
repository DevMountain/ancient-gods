require ('dotenv').config()
const EXPRESS = require('express')
const BODYPARSER = require('body-parser')
const MASSIVE = require('massive')
const C = require('./Controller/api_controller')
const MIDDLEWARE = require('./middleware/apiKey_middleware')

const APP = EXPRESS()
APP.use(BODYPARSER.json())
APP.use(MIDDLEWARE)

MASSIVE(process.env.CONNECTION_STRING)
  .then( db => {
    APP.set('db', db)
  }).catch(err=> console.log(err))



APP.get('/api/gods/get', C.get)
APP.get('/api/god/:id', C.getOne)
APP.post('/api/god/create', C.create)
APP.put('/api/god/update/:id', C.update)
APP.delete('/api/god/:id', C.delete)




const PORT = 4000
APP.listen( PORT, () => {
  console.log( 'Speaking to the gods on port ' + PORT)
})