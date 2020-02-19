const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.post('/', ProductController.create)

module.exports = router