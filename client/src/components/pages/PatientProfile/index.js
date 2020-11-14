import React, { useState, useEffect } from 'react'

// Components
import SurveyForm from './SurveyForm'
import Graph from './Graph'


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

    return <section style={ { display: "flex" } }>

        <SurveyForm setPatient={ setPatient } patientId={ match.params.patientId } />
        { patient && <Graph data={ patient.history } />
        }
    </section>

}