import React, { useState } from "react"

// Services
import AuthServices from '../../../services/auth.service'

// Styles
import './login.css'

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
            .then(data => data.user ? setTheUser(data.user) : console.log('The user doesnt exist'))
            .then(() => closeModal())
            .catch(err => console.log(err))
    }

    return <div className='login'>
        <h4>Login</h4>
        <form onSubmit={ submitHandler }>

            <div>
                <label htmlFor='username' >Username</label>
                <input type='text' id='username' value={ form.username } onChange={ inputHandler } placeholder='Your username' />
            </div>

            <div>
                <label htmlFor='password' >Password</label>
                <input type='password' id='password' value={ form.password } onChange={ inputHandler } placeholder='Write your password here' />
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
}