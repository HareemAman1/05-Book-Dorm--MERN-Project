const jwt = require ('jsonwebtoken');
const User = require ('../models/user-model')

const middleware = async(req, res, next) => {
    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).json({message: 'unauthorized HTTP, token not provided'});
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log('token from auth middleware:', jwtToken);
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRECT_KEY);
        // console.log(isVerified);

        const userdata = await User.findOne({email:isVerified.email}).select({password: 0,});

        console.log(userdata);
        req.user = userdata;
        req.token = token;
        req.userID = userdata._id;

        next();
    } catch (error) {
        return res.status(401).json({message: 'unauthorized HTTP, token not provided'});    
    }
}

module.exports = middleware;

