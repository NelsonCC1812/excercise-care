const express = require('express')
const router = express.Router()

const User = require('../models/User.model')
const Patient = require('../models/Patient.model')
const MbiSurvey = require('../models/MbiSurvey.model')

const mbiCalculator = require('../functions/mbiCalculator')

// CRUD

router.post('/newSurvey', (req, res, next) => {
    const { weight, height, patientId } = req.body

    if (!req.user) res.json({ status: 'ok', message: 'not-logged' })
    if (!weight) res.json({ status: 'ok', message: 'no-weigth' })
    if (!height) res.json({ status: 'ok', message: 'no-height' })
    if (!patientId) res.json({ status: 'ok', message: 'no-patientId' })

    MbiSurvey.create({ weight, height, mbi: mbiCalculator({ weight, height }) })
        .then(survey => Patient.findByIdAndUpdate(patientId, { $push: { history: survey._id } }, { new: true }))
        .then(patient => User.findById(req.user._id).populate('patients'))
        .then(user => res.json({ status: 'ok', user }))
        .catch(err => console.log('Error creando una nueva medida: ', err))
})

module.exports = router