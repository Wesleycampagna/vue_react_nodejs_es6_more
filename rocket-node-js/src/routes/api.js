const express = require('express')
const router = express.Router()

const controller = require('../controllers/apiController')


router.route('/product')
  .get(controller.product)
  .post(controller.store)
  //.put(controller.update)

router.put('/product/:id', controller.update)
router.get('/', controller.home)
router.get('/home', controller.home)
router.get('/products', controller.index)

module.exports = router