const Room = require('./model')
const { setDataToCreateRoom, fmtRoom } = require('./aux/dao-functions')



class RoomDao {
    #collection
    constructor() {
        this.#collection = Room
    }

    async createRoom(data) {
        const settledData = setDataToCreateRoom(data)
        const room = await this.#collection.create(settledData)
    
        return fmtRoom(room)
    }

    async findByParticipants(participants) {
        return await this.#collection.findOne({participants})
    }

    async addMessage(roomId, data) {
        const room = await this.#collection.findOneAndUpdate(
            {_id: roomId},
            {$push: {'messages': data}},
            {returnDocument: 'after'}
        )
        
        return fmtRoom(room)
    }
}

module.exports = new RoomDao()