const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ibmSurveySchema = new Schema({
    height: Number,
    weight: Number,
    mbi: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('MbiSurvey', ibmSurveySchema)