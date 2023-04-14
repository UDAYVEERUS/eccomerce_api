const express = require('express')
const productsGetHome = require('../product/products-get-home')
const {categoriesGetOnHome, categoryGetMasthead} = require("../categories/controller/controller")
const getHome = require('./controller/controller')
const verifyJwt = require('../../common/jwt')
const router = express.Router()

router.get(
    "/",
    // verifyJwt,
    categoriesGetOnHome,
    categoryGetMasthead,
    productsGetHome,
    getHome
)

module.exports = router