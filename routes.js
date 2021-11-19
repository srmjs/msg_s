const express = require('express')
const cors = require('cors')

const routesUser = require('./components/users/router')
const { parseToken } = require('./common/middleware')

module.exports = (app) => {
    app.all('*', cors({
        allowedHeaders: ['authorization', 'cache-control', 'content-type', 'pragma']
    }))

    app.use('/api/users',parseToken, routesUser)
}