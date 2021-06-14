const {successResponse, errorResponse, notFoundResponse} = require('../helpers');
const bcrypt = require('bcryptjs');
const UserRepository = require('../repository/userRepository');
const Mail = require('../mails');
const {makeHash} = require('../helpers');

exports.getUser = async(req, res, next) => {
    return successResponse(
        res, 'success', 'yes it works'
    )
}

exports.postUser = async(req, res, next) => {
    let {name, email, password} = req.body;
    // process.exit();
    let hashedPassword = await makeHash(password);
   try{
    const user = await UserRepository.createUser({
        name,
        email,
        password: hashedPassword
    });
    Mail.sendVerifyEmail();
    return successResponse(res, 'User created', 'user')
   }
   catch(error) {
       console.log('an error occurred');
       return errorResponse(res, error.message, {name, email, password})
   }
}