import React, { useState } from 'react'

// Services
import PatientService from '../../../../services/patients.service'

// Styles
import './patientForm.css'

export default ({ closeModal, setPatients }) => {

    // State
    const [form, setForm] = useState({ name: '', age: 0, gender: '' })

    // Services
    const patientService = new PatientService()

    // Handlers
    const inputHandler = e => setForm({ ...form, [e.target.id]: e.target.value })
    const submitHandler = e => {
        e.preventDefault()

        if (!form.name) return console.log('no-name')
        if (form.age <= 0) return console.log('invalid-age')
        if (form.gender !== 'male' && form.gender !== 'female' && form.gender !== 'other') return console.log('invalid-gender')

        patientService.newPatient(form)
            .then(response => response.data)
            .then(newPatients => setPatients(newPatients))
            .then(() => closeModal())
            .catch(err => console.log(err))

    }


    return <div className='patientForm'>
        <h4>Create a patient</h4>
        <form onSubmit={ submitHandler }>

            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' value={ form.name } onChange={ inputHandler } />
            </div>

            <div>
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' value={ form.age } onChange={ inputHandler } />
            </div>

            <div>
                <label htmlFor='gender'>Gender</label>
                <input id='gender' type='text' value={ form.gender } onChange={ inputHandler } />
            </div>

            <button type='submit'>Submit</button>

        </form>
    </div>
}