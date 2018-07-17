module.exports = (req, res, next) => {
  const { session } = req
  !session.user 
    ? session.user = {
      apikey
    }
    : session.user
    next()
}