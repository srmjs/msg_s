const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ulid} = require('ulid')


const Room = new Schema({
    _id: { type: String, default: ulid },
    
    name: { type: String },
    participants: { type: [String], ref: 'Users' },
    
    messages: [{
        _id: { type: String, default: ulid },
        content: { type: String },
        createdAt: { type: Date, default: new Date() }
    }]
})

module.exports = mongoose.model('Room', Room)