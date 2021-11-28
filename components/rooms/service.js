const roomDao = require('./dao')
const { RoomAlreadyExistError, RoomNotFoundError } = require('./aux/errors')


exports.createRoom = async (data) => {
    const alreadyExist = await roomDao.findByParticipants(data.participants)
    if(alreadyExist) throw new RoomAlreadyExistError('room already exist')
    
    const room = await roomDao.createRoom(data)

    return { room }
}

exports.createMessage = async (roomId, data) => {
    console.log(roomId)
    const updRoom = await roomDao.addMessage(roomId, data)
    if(!updRoom) throw new RoomNotFoundError('room not found')
    
    return { room: updRoom }
}

