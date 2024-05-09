const adminMiddleware = async(req, res, next) => {
    try{
        console.log(req.user);
        const adminRole = req.user.isAdmin
        if(!adminRole){
            return res.status(403).json({message: "Access denied, User is not an admin"})
        }
        // res.status(200).json({msg: req.user.isAdmin});
        next();     // if user is admin, process to next middleware 
    }catch(error){
        next(error);
    }
};

module.exports = adminMiddleware;