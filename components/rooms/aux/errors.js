const restErrors = require('restify-errors')


exports.RoomAlreadyExistError = restErrors.makeConstructor('RoomAlreadyExistError', { statusCode: 400 })
exports.RoomNotFoundError = restErrors.makeConstructor('RoomNotFoundError', { statusCode: 404 })