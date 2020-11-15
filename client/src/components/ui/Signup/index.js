import React, { useState } from 'react'

// Services
import AuthServices from '../../../services/auth.service'

// Styles
import './signup.css'


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
            .then(data => data.user ? setTheUser(data.user) : console.log('the user already exist'))
            .then(() => closeModal())
            .catch(err => console.log(err))
    }


    return <div className='signup'>
        <form onSubmit={ submitHandler }>

            <h4>Signup</h4>

            <div>
                <label htmlFor='username' >Username</label>
                <input type='text' id='username' value={ form.username } placeholder='Choose your username' onChange={ inputHandler } />
            </div>

            <div>
                <label htmlFor='password1' >Password</label>
                <input type='password' id='password1' placeholder='Write your password' value={ form.password1 } onChange={ inputHandler } />
            </div>

            <div>
                <label htmlFor='password2'>Repear your password</label>
                <input type='password' id='password2' placeholder='The same password' value={ form.password2 } onChange={ inputHandler } />
            </div>

            <button type='submit'>Submit</button>

        </form>
    </div>
}