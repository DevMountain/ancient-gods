const _ = require('lodash')
const deepclone = require('lodash.clonedeep')
const uniqueExp = require('../Controller/api_controller').uniqueExp
const gods = require('../Controller/api_controller').gods

module.exports = (req, res, next ) => {
    const {apikey} = req.headers
    // console.log('apikey--------', apikey)
    if(!req.headers.apikey){
      req.session.user.apikey = false
    }else if(apikey && uniqueExp.find( e => e.apikey == apikey) == undefined){
      // console.log('---------found?---------', uniqueExp)
      // console.log('--------uniqueExp.find-----------', uniqueExp.find( e => e.apikey == apikey))
      let newArray = deepclone(gods)
      uniqueExp.push({apikey: apikey, gods: newArray})
      // console.log('---------found!---------', uniqueExp.findIndex( e => e.apikey == apikey))
      let index = uniqueExp.find(e => e.apikey == apikey)
      // console.log('index----------------', index.apikey);
      req.session.user.apikey = index.apikey
    }else{
      let index = uniqueExp.find((e) => e.apikey == apikey)
      // console.log('---------index------------', index)
      // console.log('---------found!---------', uniqueExp.findIndex( e => e.apikey == apikey))
      // console.log('-----found', uniqueExp.find((e) => e[0] == apikey))
      req.session.user.apikey = index.apikey
    }
    next()
}