import React, { useState } from "react"

// Services
import AuthServices from '../../../services/auth.service'

export default ({ setTheUser, closeModal }) => {

    // State
    const [form, setForm] = useState({ username: '', password: '' })

    // Services
    const authServices = new AuthServices()

    // Handlers
    const inputHandler = e => setForm({ ...form, [e.target.id]: e.target.value })
    const submitHandler = e => {
        e.preventDefault()

        authServices.login(form)
            .then(user => setTheUser(user))
            .then(() => closeModal())
            .catch(err => console.log(err))
    }

    return <div>
        <form onSubmit={ submitHandler }>
            <label htmlFor='username' >Username</label>
            <input type='text' id='username' value={ form.username } onChange={ inputHandler } placeholder='Your username' />

            <label htmlFor='password' >Password</label>
            <input type='password' id='password' value={ form.password } onChange={ inputHandler } placeholder='Write your password here' />

            <button type='submit'>Submit</button>
        </form>
    </div>
}