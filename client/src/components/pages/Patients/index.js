import React, { useState, useEffect } from 'react'

// Components
import PatientCard from './PatientCard'
import Modal from '../../ui/Modal'
import PatientForm from './PatientForm'

// Services
import PatientServices from '../../../services/patients.service'

export default ({ loggedInUser, closeModal }) => {

    // State
    const [patients, setPatients] = useState(null)
    const [showModal, setModal] = useState(false)

    // Services
    const patientService = new PatientServices()

    useEffect(() => {
        patientService.getAllPatiens()
            .then(response => setPatients(response.data))
            .catch(err => console.log(err))
    }, [])

    return <section>
        { patients ? patients.map(elm => <PatientCard key={ elm._id } { ...elm } />) : 'Loading' }
        <button onClick={ () => setModal(true) }>Create a new patient</button>

        { showModal && <Modal show={ showModal } Component={ () => <PatientForm setPatients={ setPatients } closeModal={ () => setModal(false) } /> } closeModal={ () => setModal(false) } /> }
    </section>
}