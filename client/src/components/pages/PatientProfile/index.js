import React, { useState, useEffect } from 'react'

// Services
import PatientService from '../../../services/patients.service'



export default ({ match }) => {

    const [patient, setPatient] = useState(null)

    useEffect(() => {
        patientService.getPatient(match.params.patientId)
            .then(response => setPatient(response.data))
            .catch(err => err)
    }, [])

    // Services
    const patientService = new PatientService()

    return <section>

    </section>

}