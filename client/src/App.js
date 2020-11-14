//React imports
import React, { useState, useEffect, useCallback } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

// Components
import Navbar from './components/ui/Navbar'
import Home from './components/pages/Home'
import Patients from './components/pages/Patients'

//Style imports
import './App.css'

//Services
import AuthService from './services/auth.service'


export default function App() {

  // Services
  const authService = new AuthService()

  //USESTATE
  const [loggedInUser, setTheUser] = useState(null)
  const [message, changeMessage] = useState('')

  //USECALLBAK
  const clearMessage = useCallback(() => changeMessage(''), [])
  const isLoggedIn = useCallback(() => {
    authService.loggedInUser()
      .then(response => setTheUser(response.user))
      .catch(() => changeMessage('An error has occurred'))
  }, [])
  const logout = () => {
    authService.logout()
      .then(response => setTheUser(null))
      .catch(err => err)
  }

  //USEEFFECT
  useEffect(() => isLoggedIn(), [isLoggedIn])

  //RETURN
  return <div>
    <Navbar loggedInUser={ loggedInUser } setTheUser={ setTheUser } logout={ logout } />

    <div style={ { marginTop: '10vh' } }>

      <Switch>

        <Route exact path='/home' render={ () => <Home /> } />
        <Route exact path='/showPatients' render={ () => loggedInUser ? <Patients /> : <Redirect to='/home' /> } />
        <Route path='/showPatients/:patientId' />

        <Redirect to='/home' />
      </Switch>

    </div>

  </div>
}
