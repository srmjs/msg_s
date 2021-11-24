const userDao = require('./dao')
const { checkPasswordsAreEquals } = require('./aux/service-functions')


exports.create = async(data) => {
    checkPasswordsAreEquals(data.password, data.repeatedPassword)
    const user = await userDao.create(data)

    return { user }
}

exports.list = async() => {
    const users = await userDao.list()

    return { users }
}