const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  patients: [{ type: Schema.Types.ObjectId, ref: 'Patient' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
