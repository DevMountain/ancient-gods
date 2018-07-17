const _ = require('lodash')
const deepclone = require('lodash.clonedeep')
const uniqueExp = require('../Controller/api_controller').uniqueExp
const gods = require('../Controller/api_controller').gods

module.exports = (req, res, next ) => {
    // console.log('middleware checked')
    // console.log('headers', req.headers)
    // console.log('apikey', req.headers.apikey)
    // console.log(req.path)
    // console.log('unique', uniqueExp);
    // console.log('gods array', gods)
    const {apikey} = req.headers

    if(!req.headers.apikey){
      
    }else if(apikey && uniqueExp.find( e => e[0] == apikey) == undefined){
      let newArray = deepclone(gods)
      uniqueExp.push({apikey,newArray})
      let index = uniqueExp.find(e => e.apikey == apikey)
    }else{
      let found = uniqueExp.find((e) => e[0] == apikey)
    }
    next()
}