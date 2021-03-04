const { Router } = require('express')
const router = Router()
const controller = require('./controller')

router.get('/', controller.index)
router.post('/add', controller.themcongviec)
router.get('/all', controller.laycongviec)
router.delete('/xoacv/:id',controller.xoacongviec)

module.exports = router