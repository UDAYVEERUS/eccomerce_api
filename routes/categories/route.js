const express = require('express')
const { categoryAdd, categoriesGet, categoriesUpdate, categoryDelete, categoryGetIsActive, categoryGetMasthead, categoriesGetOnHome } = require('./controller/controller')

const router = express.Router()

router.post(
    "/add",
    categoryAdd
)

router.get(
    "/get",
    categoriesGet
)

router.patch(
    "/update/:id",
    categoriesUpdate
)

router.delete(
    "/delete/:id",
    categoryDelete
)
router.get(
    "/isactive",
    categoryGetIsActive
)

module.exports = router