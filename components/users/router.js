const router = require('express').Router()

const service = require('./service')
const { generator } = require('../../common/middleware')


router.post('/', generator(service.createUser, ['body']))

module.exports = router