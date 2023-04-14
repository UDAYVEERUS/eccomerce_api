const Category = require('../categoriesSchema')

const categoryAdd = async (req, res, next) => {
    try {
        const category_response = await Category.create(req.body)
        if (category_response) {
            return res.status(201).json({
                message: "Category Added successfully",
                data: category_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "Unable to add category",
            status: 402
        })
    }
    catch (Err) {
        console.log(Err)
        return res.status(500).json({
            message: "something went wrong",
            data: Err,
            status: 500
        })
    }

}
const categoriesGet = async (req, res, next) => {
    try {

        const category_response = await Category.find({})
        if (category_response) {
            return res.status(201).json({
                message: "Category fetched successfully",
                data: category_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "Unable to fetch category",
            status: 402
        })
    }
    catch (Err) {
        console.log(Err)
        return res.status(500).json({
            message: "something went wrong",
            data: Err,
            status: 500
        })
    }

}
const categoriesUpdate = async (req, res, next) => {
    try {
        const productId = req.params.id
        const category_response = await Category.findByIdAndUpdate(productId, req.body)
        if (category_response) {
            return res.status(201).json({
                message: "Category updated successfully",
                data: category_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "Unable to update category",
            status: 402
        })
    }
    catch (Err) {
        console.log(Err)
        return res.status(500).json({
            message: "something went wrong",
            data: Err,
            status: 500
        })
    }

}

const categoryDelete = async (req, res, next) => {
    try {
        const productId = req.params.id
        const category_response = await Category.findByIdAndDelete(productId)
        if (category_response) {
            return res.status(201).json({
                message: "Category deleted successfully",
                status: 201
            })
        }
        return res.status(402).json({
            message: "Unable to delete category",
            status: 402
        })
    }
    catch (Err) {
        console.log(Err)
        return res.status(500).json({
            message: "something went wrong",
            data: Err,
            status: 500
        })
    }

}

const categoryGetIsActive = async (req, res, next) => {
    try {

        const category_response = await Category.find({}).where("isActive").equals(true)
        console.log(category_response, "here111")
        if (category_response) {
            return res.status(201).json({
                message: "Category fetched successfully",
                data: category_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "Unable to fetch category",
            status: 402
        })
    }
    catch (Err) {
        console.log(Err)
        return res.status(500).json({
            message: "something went wrong",
            data: Err,
            status: 500
        })
    }

}


const categoryGetMasthead = async (req, res, next) => {
    try {

        const category_response = await Category.find({}).where("mastHead").equals(true).where("onHome").equals(false)
        console.log(category_response, "here111")
        if (category_response) {
            req.categories_masthead = category_response
            return next()
        }
        return res.status(402).json({
            message: "Unable to fetch category",
            status: 402
        })
    }
    catch (Err) {
        console.log(Err)
        return res.status(500).json({
            message: "something went wrong",
            data: Err,
            status: 500
        })
    }

}

const categoriesGetOnHome = async (req, res, next) => {
    try {

        const category_response = await Category.find({}).where("onHome").equals(true).where("mastHead").equals(false)
        console.log(category_response, "here111")
        if (category_response) {

            req.categories_home = category_response
            return next()
        }
        return res.status(402).json({
            message: "Unable to fetch categories",
            status: 402
        })
    }
    catch (Err) {
        console.log(Err)
        return res.status(500).json({
            message: "something went wrong",
            data: Err,
            status: 500
        })
    }

}

module.exports = { categoryAdd, categoriesGet, categoriesUpdate, categoryDelete, categoryGetIsActive, categoryGetMasthead, categoriesGetOnHome }