const { passwordGenerate } = require('../../../common/password')
const { passwordValidate } = require('../../../common/password.js')
const User = require('../userSchema.js')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "itsasecret123"


// REGISTER ROUTE
const userRegister = async (req, res, next) => {
    try {
        const { name, email, mobile, password } = req.body
        const passwordHash = await passwordGenerate(password)
        const user_response = await User.create({
            name,
            email,
            mobile,
            password: passwordHash
        })
        if (user_response) {
            return res.status(201).json({
                message: "user registered successfully",
                data: user_response,
                status: 201
            })
        }
        return res.status(401).json({
            message: "please fill all required field",
            status: 401
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "something went wrong",
            status: 500
        })
    }

}

//LOGIN ROUTE

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user_response = await User.find({ email: email })
        const passwordCompare = await passwordValidate(password, user_response[0].password)
        console.log(passwordCompare,"here49")
        if (!passwordCompare) {
            return res.status(401).json({
                message: "Invalid credentials",
                status: 401
            })
        }
        const data = {
            User: {
                id: user_response[0]._id
            }
        }
        console.log(data.User,"here60")
        const authToken = await jwt.sign(data, JWT_SECRET)
        return res.status(201).json({
            token: authToken,
            message: "login successfully"
        })
    }
    catch (err) {
        console.log(err)
    }
}

const userGetById = async (req, res, next) => {
    try {
        // console.log(req.jwt_Data,"here75")
        const user_response = await User.findById(req.jwt_Data.User.id)
        if (user_response) {
            return res.status(201).json({
                message : "user fetch successfully",
                data : user_response,
                status : 201

            })
        }

        return res.status(401).json({
            message: "unable to fetch user",
            status: 401
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "something went wrong",
            data: err,
            status: 500
        })
    }

}
module.exports = { userRegister, userLogin, userGetById }