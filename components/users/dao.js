const User = require('./model')
const { setDataToCreateUser, fmtUser } = require('./aux/dao-functions')



class UserDao {
    #collection
    constructor() {
        this.#collection = User
    }

    async create(data) {
        const settledData = setDataToCreateUser(data)
        const user = await this.#collection.create(settledData)
    
        return fmtUser(user)
    }

    async list() {
        const users = await this.#collection.find({ 'config.public': true })

        return users.map(user => fmtUser(user))
    }
}

module.exports = new UserDao()