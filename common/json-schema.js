const AJV = require('ajv')
const ajvMergePatch = require('ajv-merge-patch')

const { ValidationError } = require('./errors')

const ajv = new AJV({
    allErrors: true,
    coerceTypes: true,
    removeAdditional: true,
    useDefaults: true
})

ajvMergePatch(ajv)

exports.createValidator = (schema) => {
    const validate = ajv.compile(schema)
    return (object) => {
        if(!validate(object)) throw new ValidationError(validate.errors.map(err => err.message.join()))
    }
}

exports.ajv = ajv