const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ulid} = require('ulid')


const User = new Schema({
    _id: { type: String, default: ulid },
    alias: { type: String },
    password: { type: String },
    config: {
        public: { type: Boolean, default: false },
        delete_messages: { type: Boolean },
        delete_messages_each: { type: Number },
        default_secret_code: { type: String }
    }
})

module.exports = mongoose.model('User', User)