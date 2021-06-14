const bcrypt = require('bcryptjs');

exports.makeHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword
}