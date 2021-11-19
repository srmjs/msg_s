const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')

const setUpRoutes = require('./routes')
const config = require('./config')

const PORT = config.PORT
const MONGO_URI = config.MONGO_URI

const app = express()
app.use(helmet())
app.use(express.json())






mongoose.connect(MONGO_URI)
    .then(() => console.log(`connected at ${MONGO_URI} database`))
    .catch((e) => console.error(e))

setUpRoutes(app)
app.listen(PORT, console.log(`server running at port ${PORT}`))

module.exports = app



