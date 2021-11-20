const moment = require('moment')


exports.setDataToCreateRoom = (data) => {
    const settledData = {...data}


    return settledData
}

exports.fmtRoom = (room) => {
    if (!room) return null
    const fmt = room.toJSON()
    console.log(fmt.messages)
    fmt.id = fmt._id
    fmt.messages = fmt.messages.map(msg => {
        msg.id = msg._id
        delete msg._id
        return msg
    })

    delete fmt._id
    delete fmt.__v

    return fmt
}