const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const authToken = req.header('Authorization');

    // console.log(token);
    if(!authToken) return res.status(401).send('Access Denied!'); 

    let token = authToken.split(' ')[1];

    try {
        const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        // console.log('viewing the verified ', verified);
        req.user = verified;
        next();
    } catch (err){
        res.status(401).send('Invalid Token');
    }
}