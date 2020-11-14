import React, { useState } from 'react'

// Services
import AuthServices from '../../../services/auth.service'


export default ({ closeModal, setTheUser }) => {

    // State
    const [form, setForm] = useState({ username: '', password1: '', password2: '' })

    // Services
    const authServices = new AuthServices()

    // Handlers
    const inputHandler = e => setForm({ ...form, [e.target.id]: e.target.value })
    const submitHandler = e => {
        e.preventDefault()

        if (form.password1 !== form.password2) {
            return console.log('Not the same password')
        }

        authServices.signup({ username: form.username, password: form.password1 })
            .then(user => setTheUser(user))
            .then(() => closeModal())
            .catch(err => console.log(err))
    }


    return <div>
        <form onSubmit={ submitHandler }>

            <label htmlFor='username' >Username</label>
            <input type='text' id='username' value={ form.username } placeholder='Choose your username' onChange={ inputHandler } />

            <labeñ htmlFor='password1' >Password</labeñ>
            <input type='password' id='password1' placeholder='Write your password' value={ form.password1 } onChange={ inputHandler } />

            <label htmlFor='password2'>Repear your password</label>
            <input type='password' id='password2' placeholder='The same password' value={ form.password2 } onChange={ inputHandler } />

        </form>
    </div>
}