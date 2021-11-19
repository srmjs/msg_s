const restErrors = require('restify-errors')

exports.InvalidTokenError = restErrors.makeConstructor('InvalidTokenError', { statusCode: 403 })
exports.ValidationError = restErrors.makeConstructor('ValidationError', { statusCode: 400 })
exports.MissingTokenError = restErrors.makeConstructor('MissingTokenError', { statusCode: 403 })