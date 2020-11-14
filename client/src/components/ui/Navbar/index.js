import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Image
import menuImage from './menu.svg'

// Components
import ModalForm from '../Modal'
import Login from '../Login'
import Signup from '../Signup'

// Styles
import './navbar.css'

export default ({ loggedInUser, setTheUser, logout }) => {

    const [showModalForm, setShowModalForm] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    // Handles if the navbar is hidden (scroll)
    useEffect(() => {
        let prevY = window.pageYOffset

        window.onscroll = () => {
            if (prevY < window.pageYOffset + .1) {
                document.getElementsByClassName('navbar')[0].classList.add('uphidden')
            } else if (prevY > window.pageYOffset - .1) {
                document.getElementsByClassName('navbar')[0].classList.remove('uphidden')
            }
            prevY = window.pageYOffset
        }
    })

    useEffect(() => {
        showMenu && document.querySelector('body').classList.add('blocked-scroll')

        !showMenu && document.querySelector('body').classList.remove('blocked-scroll')
    }, [showMenu])

    return <div className='navbar'>
        <div className='navbar-container'>

            <div className='nav-header'>
                <Link to='/home' className='home-link' onClick={ () => showMenu(false) }>CareExpand</Link>
                <figure><img className={ `menu-img ${showMenu ? 'opened-menu' : ''}` } src={ menuImage } alt='menu' onClick={ () => setShowMenu(!showMenu) } /></figure>
            </div>

            <nav className={ `nav-links ${showMenu ? 'show-menu' : ''}` }>
                <ul>
                    <li>{ loggedInUser ? <Link to='/patients' className='link' onClick={ () => setShowMenu(false) }> Patients</Link> : <button className='link btn-link' onClick={ () => { setShowModalForm('login'); setShowMenu(false) } }>Login</button> }</li>
                    <li>{ loggedInUser ? <button className='link btn-link' onClick={ () => { logout(); setShowMenu(false) } }>Logout</button> : <button className='link btn-link' onClick={ () => { setShowModalForm('signup'); setShowMenu(false) } }>Signup</button> }</li>
                </ul>
            </nav>

        </div>

        { showModalForm && <ModalForm show={ showModalForm } Component={ showModalForm === 'login' ? () => <Login setTheUser={ setTheUser } closeModal={ () => setShowModalForm(false) } /> : () => <Signup setTheUser={ setTheUser } /> } closeModal={ () => setShowModalForm(false) } /> }
    </div>
}