import axios from 'axios'

export default class mbiSureyService {
    constructor() {
        this.service = axios.create({ baseURL: `${process.env.REACT_APP_URL}/mbiSurvey`, withCredentials: true })
    }

    newSurvey = (survey) => this.service.post('/newSurvey', survey).then(response => response.data)
}