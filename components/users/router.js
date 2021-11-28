const router = require('express').Router()

const service = require('./service')
const { generator } = require('../../common/middleware')


router.post('/', generator(service.create, ['body']))
router.post('/login', generator(service.login, ['body']))
router.get('/', generator(service.list, []))
router.get('/friend', generator(service.findByAlias, ['query.user']))

module.exports = router