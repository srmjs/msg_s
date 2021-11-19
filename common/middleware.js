const jwt = require('jsonwebtoken')
const { get } = require('lodash')

const config = require('../config')
const { InvalidTokenError, MissingTokenError } = require('./errors')
const { createValidator } = require('./json-schema')


function getToken(req) {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
        return req.headers.authorization.split(' ')[1]
    }
    return null
}

exports.generator = (cb, params) => async(req, res, next) => {
    try{
        const cbParams = params.map(e => get(req, e))
        res.json(await cb(...cbParams))
    }catch(err){
        next(err)
    }
}
exports.checkJWT = (req, res, next) => {
    if(!req.token) return new MissingTokenError('no token found in request')
    return next()
}
exports.parseToken = async (req, res, next) => {
    const plainToken = getToken(req)
    if (plainToken){
        try{
            const token = jwt.verify(plainToken, config.JWT.SECRET)
            if(!token) return next(new InvalidTokenError('invalid token'))
            req.token = token
        }catch(err) {
            return next(new InvalidTokenError('invalid token'))
        }
    }
    return next()
}

exports.validateBody = async (schema) => {
    const validate = createValidator(schema, 'body validation failed')

    return (req, res, next) => {
        validate(req.body)
        next()
    }
}