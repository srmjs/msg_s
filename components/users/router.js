const router = require('express').Router()

const service = require('./service')
const { generator } = require('../../common/middleware')


router.post('/', generator(service.create, ['body']))
router.get('/', generator(service.list, []))

module.exports = router