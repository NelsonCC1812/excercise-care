const express = require('express')
const router = express.Router()

const User = require('../models/User.model')
const Patient = require('../models/Patient.model')

router.post('/newPatient', (req, res, next) => {
    if (!req.user) {
        res.json({ status: 'ok', message: 'not-logged' })
    }

    const { name, age, gender } = req.body

    if (!name) {
        res.json({ status: 'ok', message: 'no-name' })
    }

    if (!age) {
        res.json({ status: 'ok', message: 'no-age' })
    }

    if (gender !== 'male' && gender !== 'female' && gender !== 'other') {
        res.json({ status: 'ok', message: 'not-valid-gender' })
    }


    Patient.create({ name, age, gender })
        .then(patient => User.findByIdAndUpdate(req.user._id, { $push: { patients: patient._id } }, { new: true }).populate('patients'))
        .then(user => res.json({ status: 'ok', user }))
        .catch(err => res.json({ status: 'ko', message: err }))
})


router.get('/getPatient/:patientId', (req, res, next) => {
    if (!req.user) {
        res.json({ status: 'ok', message: 'not-logged' })
    }

    const { patientId } = req.params

    User.findOne({ _id: req.user._id, patients: { $elemMatch: { $eq: patientId } } })
        .then(finded => finded ? Patient.findById(patientId) : res.json({ status: 'ok', message: 'not-finded' }))
        .then(patient => res.json({ status: 'ok', data: patient }))
        .catch(err => console.log(err))
})


module.exports = router