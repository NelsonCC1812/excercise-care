import React, { useEffect } from 'react'

// Styles
import './modal.css'

export default ({ show, closeModal, Component }) => {


    useEffect(() => {
        show && document.querySelector('html').classList.add('blocked-scroll')
        !show && document.querySelector('html').classList.remove('blocked-scroll')
    }, [show])

    return show && <div className='modal-container'>

        <section className='modal-background' onClick={ closeModal } />
        <div className='modal-main-wrapper'>
            <section className='modal-main'>
                { show && Component && <Component closeModal={ closeModal } /> }
            </section>
        </div>
    </div>
}