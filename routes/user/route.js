const express  = require('express')

const {userRegister, userLogin, userGetById, usersGet} = require('./controller/controller.js')
const verfiyJwt = require("../../common/jwt.js")
const verifyJwt = require('../../common/jwt.js')
const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/getbyid", verfiyJwt ,userGetById)
router.get(
    "/getall",
    verifyJwt,
    usersGet
)

module.exports = router