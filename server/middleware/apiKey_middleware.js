const _ = require('lodash')
const deepclone = require('lodash.clonedeep')
const uniqueExp = require('../Controller/api_controller').uniqueExp
const gods = require('../Controller/api_controller').gods

module.exports = (req, res, next ) => {
    const {apikey} = req.headers

    if(!req.headers.apikey){
      req.headers.apikey = false
    }else if(apikey && !uniqueExp.apikey){
      let newArray = deepclone(gods)
      uniqueExp
    }

    next()
}