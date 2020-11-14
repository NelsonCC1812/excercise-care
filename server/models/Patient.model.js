const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = Schema({
    name: String,
    age: Number,
    gender: { type: String, enum: ['male', 'female', 'other'] },
    history: [{ type: Schema.Types.ObjectId, ref: "MbiSurvey" }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Patient', patientSchema)