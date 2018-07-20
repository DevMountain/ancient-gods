module.exports = (req, res, next) => {
  const {apikey} = req.headers
  // console.log('sessions', req.session)
  const { session } = req
    if(!session.user){
      session.user ={ 
       apikey: apikey
      }
      }else if(session.user.apikey !== apikey){
        session.user.apikey == apikey
     }
    // console.log('session.user.apikey------', session.user.apikey)
    next()
}