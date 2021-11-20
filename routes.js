const express = require('express')
const cors = require('cors')

const routesUser = require('./components/users/router')
const routesRooms = require('./components/rooms/router')
const { parseToken } = require('./common/middleware')

module.exports = (app) => {
    app.all('*', cors({
        allowedHeaders: ['authorization', 'cache-control', 'content-type', 'pragma']
    }))

    app.use('/api/users',parseToken, routesUser)
    app.use('/api/rooms',parseToken, routesRooms)
}