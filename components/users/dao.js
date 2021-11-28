const bcrypt = require('bcrypt')

const User = require('./model')
const { setDataToCreateUser, fmtUser } = require('./aux/dao-functions')




class UserDao {
    #collection
    constructor() {
        this.#collection = User
    }

    async fetch(id) {
        const user = await this.#collection.findById(id)

        return fmtUser(user)
    }

    async findByAlias(alias) {
        const user = await this.#collection.findOne({alias})

        return fmtUser(user)
    }

    async findByCredentials(alias, password) {
        const user = await this.#collection.findOne({alias})
        if(!user) return null

        const pass =  bcrypt.compareSync(password, user.password);
        if(!pass) return null

        return fmtUser(user)
    }

    async create(data) {
        const settledData = setDataToCreateUser(data)
        const user = await this.#collection.create(settledData)
        console.log(user)
        return fmtUser(user)
    }

    async list() {
        const users = await this.#collection.find({ 'config.public': true })

        return users.map(user => fmtUser(user))
    }
}

module.exports = new UserDao()