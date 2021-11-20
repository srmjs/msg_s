const bcrypt = require('bcrypt')
const config = require('../../../config')




function encrypt(data) {
    return bcrypt.hashSync(data, bcrypt.genSaltSync(Number(config.SECRET_ROUNDS)))
}





exports.setDataToCreateUser = (data) => {
    const settledData = {...data}

    settledData.password = encrypt(settledData.password)
    settledData.config.default_secret_code = encrypt(settledData.config.default_secret_code)
    return settledData
}

exports.fmtUser = (user) => {
    if (!user) return null
    const fmt = user.toJSON()

    fmt.id =fmt._id

    delete fmt.config.default_secret_code
    delete fmt._id
    delete fmt.password
    delete fmt.__v

    return fmt
}