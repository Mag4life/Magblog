const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')      // Allows us to set cookies
const morgan = require('morgan')

const {MONGOOSE_URI, MONGOOSE_OPTIONS, PORT} = require('./helpers/config')

// User own imports
const {authenticateUser} = require('./middlewares/auth')
const authRouter = require('./routers/auth')
const postRouter = require('./routers/post')


const app = express()
app.use(express.json())
app.use(cookieParser())

// Mongoose db Connection
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(MONGOOSE_URI, MONGOOSE_OPTIONS)
.then(()=> {
    console.log("DB Connection Successful")
}).catch(exception=> {
    console.log(`DB Connection Failed: ${exception}`)
})

// Usage of middlewares here
app.use(morgan('tiny'))
app.use(authenticateUser)

app.get("/", (request, response)=> {
    response.send("<h1>Hey backend working</h1>")
})
app.use(authRouter)
app.use(postRouter)


app.listen(PORT, ()=> {
    console.log(`Server Started on port: ${PORT}`)
})