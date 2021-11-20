const router = require('express').Router()

const service = require('./service')
const { generator, checkJWT } = require('../../common/middleware')


router.post('/', generator(service.createRoom, ['body']))
router.put('/:id/messages', generator(service.createMessage, ['params.id','body']))

module.exports = router