require('dotenv').config()


const PORT = process.env.PORT
let MONGOOSE_URI
const JWT_SECRET = process.env.JWT_SECRET
const MONGOOSE_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


switch (process.env.NODE_ENV) {
    case "dev":
        MONGOOSE_URI = process.env.MONGOOSE_URI_DEV
        break
    case "prod":
        MONGOOSE_URI = process.env.MONGOOSE_URI_PROD
        break
    default:
        throw("App Environment not specified")
}


module.exports = {
    MONGOOSE_OPTIONS,
    MONGOOSE_URI,
    PORT,
    JWT_SECRET
}