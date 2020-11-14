const passport = require('passport')
const User = require('../../models/User.model')

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id)
})

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession).populate('patients')
    .then(userDocument => cb(null, userDocument))
    .catch(err => cb(err))
})
