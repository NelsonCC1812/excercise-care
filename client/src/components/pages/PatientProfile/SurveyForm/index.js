import React, { useState } from 'react'

// Services
import MbiService from '../../../../services/mbiSurvey.service'


export default ({ patientId, setPatient }) => {

    // State
    const [form, setForm] = useState({ weight: 0, height: 0, mbi: 0, system: 'is' })

    // Services
    const mbiService = new MbiService()

    // Helpers
    const mbiCalculator = ({ weight, height, system = 'is' }) => ((weight / (height * height)) * (system === 'is' ? 1 : 703))

    // Handlers
    const inputHandler = e => setForm({ ...form, [e.target.id]: e.target.value, mbi: mbiCalculator(form) })
    const submitHandler = e => {
        e.preventDefault()

        mbiService.newSurvey({ patientId, ...form })
            .then(response => setPatient(response.data))
            .then(() => setForm({ weight: 0, height: 0, mbi: 0 }))
            .catch(err => console.log(err))
    }

    return <div>
        <form onSubmit={ submitHandler }>

            <div>
                <label htmlFor='weight'>Weight</label>
                <input id='weight' type='number' value={ form.weight } onChange={ inputHandler } placeholder={ 'Weight' } />
            </div>

            <div>
                <label htmlFor='height'>Height</label>
                <input id='height' type='number' value={ form.height } onChange={ inputHandler } placeholder={ 'Height' } />
            </div>

            <div>
                <label htmlFor='system'>System</label>
                <select id='system'>
                    <option defaultValue value='is'>SI</option>
                    <option value='cgs'>CGS</option>
                </select>
            </div>

            <div>
                <p>MBI: { form.mbi }</p>
            </div>

            <button type='submit'>Submit</button>

        </form>

    </div>
}