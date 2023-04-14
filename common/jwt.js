const jwt = require('jsonwebtoken')
const JWT_SECRET = "itsasecret123"

const verifyJwt = async(req, res, next) => {
    const token = req.header("Authorization")
    if(!token){
        return res.status(402).json({
            message : "No jwt provided",
            status : 402
        })
    }

    try{
        const validate = await jwt.verify(token,JWT_SECRET)
        if(validate){
            req.jwt_Data = validate
            console.log("17")
            return next()
        }
        return res.status(402).json({
            message : "Invalid jwt",
            status : 402
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "Something went wrong",
            data : err,
            status : 500
        })
    }
}

module.exports = verifyJwt