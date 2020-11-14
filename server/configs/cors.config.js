const cors = require('cors')

const whitelist = [process.env.ENV === 'DEV' ? 'http://localhost:3000' : 'https://excercise-care.herokuapp.com']
const corsOptions = {
    origin: (origin, cb) => {
        const originWhitelisted = whitelist.includes(origin)
        cb(null, originWhitelisted)
    },
    credentials: true
}

module.exports = app => app.use(cors(corsOptions))