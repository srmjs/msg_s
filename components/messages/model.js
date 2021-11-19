const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ulid} = require('ulid')


const Message = new Schema({
    _id: { type: String, default: ulid },
    from: { type: String },
    to: { type: String },
    content: { type: String }
})

module.exports = mongoose.model('Message', Message)