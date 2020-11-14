import axios from 'axios'

export default class PatientServices {
    constructor() {
        this.service = axios.create({ baseURL: `${process.env.REACT_APP_URL}/patient`, withCredentials: true })
    }

    newPatient = patient => this.service.post('/newPatient', patient).then(response => response.data)
    getPatient = id => this.service.get('/getPatient/' + id).then(response => response.data)
}