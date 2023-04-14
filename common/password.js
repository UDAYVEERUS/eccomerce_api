const bcrypt = require('bcrypt')

const passwordGenerate = (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

const passwordValidate = async(password, hash) => {
    return await bcrypt.compareSync(password, hash)
}

module.exports = {passwordGenerate, passwordValidate}