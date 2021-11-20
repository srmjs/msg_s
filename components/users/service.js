const userDao = require('./dao')
const { checkPasswordsAreEquals } = require('./aux/service-functions')
const { fmtUser } = require('./aux/dao-functions')


exports.createUser = async(data) => {
    checkPasswordsAreEquals(data.password, data.repeatedPassword)
    const user = await userDao.create(data)

    return { user }
}