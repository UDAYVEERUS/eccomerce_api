const express = require('express')
const router = express.Router()
const productAdd = require("./post/post")
const { getCategoryIdByName } = require('../categories/verification')
const productsGet = require('./get/get')
const productsUpdate = require('./patch/patch')
const productsGetByUser = require('./getProduct')
const productsGetHome = require('./products-get-home')
router.post(
    "/add",
    getCategoryIdByName,
    productAdd
)

router.get(
    "/getall",
    productsGet
)
router.patch(
    "/update/:id",
    productsUpdate
)

router.get(
    "/get/:id",
    productsGetByUser
)


module.exports = router