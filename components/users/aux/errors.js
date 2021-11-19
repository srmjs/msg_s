const restErrors = require('restify-errors')


exports.PasswordDontMachError = restErrors.makeConstructor('PasswordDontMachError', { statusCode: 400 })