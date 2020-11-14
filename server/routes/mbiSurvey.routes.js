const express = require('express')
const router = express.Router()

const User = require('../models/User.model')
const Patient = require('../models/Patient.model')
const MbiSurvey = require('../models/MbiSurvey.model')

// CRUD

router.post('/newSurvey', (req, res, next) => {
    const { weight, height, mbi, patientId } = req.body

    if (!req.user) res.json({ status: 'ok', message: 'not-logged' })
    if (!weight) res.json({ status: 'ok', message: 'no-weigth' })
    if (!height) res.json({ status: 'ok', message: 'no-height' })
    if (!patientId) res.json({ status: 'ok', message: 'no-patientId' })

    MbiSurvey.create({ weight, height, mbi })
        .then(survey => Patient.findByIdAndUpdate(patientId, { $push: { history: survey._id } }, { new: true }).populate('history'))
        .then(data => res.json({ status: 'ok', data }))
        .catch(err => console.log('Error creando una nueva medida: ', err))
})

module.exports = router