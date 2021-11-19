const { PasswordDontMachError } = require('./errors')

exports.checkPasswordsAreEquals = (pass, repeatedPass) => {
    if (pass !== repeatedPass) throw new PasswordDontMachError('passwords dont match')
}