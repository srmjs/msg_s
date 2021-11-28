

const userDao = require('./dao')
const { checkPasswordsAreEquals } = require('./aux/service-functions')
const { generateToken } = require('../../common/middleware')


exports.create = async(data) => {
    checkPasswordsAreEquals(data.password, data.repeatedPassword)

    const user = await userDao.create(data)
    const token = generateToken(data)
    
    return { user, token }
}

exports.list = async() => {
    const users = await userDao.list()

    return { users }
}

exports.findByAlias = async(alias) => {
    const user = await userDao.findByAlias(alias)
    console.log(user)
    return { user }
}

exports.login = async(data) => {
    const user = await userDao.findByCredentials(data.alias, data.password)


    const token = generateToken({user})

    return { user, token }
}