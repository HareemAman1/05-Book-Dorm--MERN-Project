const User = require ('../models/user-model');
const bcrypt = require('bcryptjs');

////////// CONTROLLERS //////////
//// HOME
const home = async (req, res) => {
    try{
        res.status(200).send('CONTROLLER: Welcome ');
    }
    catch {
        console.log (error)
    }
}

//// REGISTERATION
const register = async (req, res) => {
    try{
        // console.log(req.body);
        //// 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
        const {username, phone, email, password} = req.body

        //// 2. Check Email Existence: 📋 Check if the email is already registered.
        const userExist = await User.findOne({email});  //not 'email: email' since value is same
        if(userExist) {
            return res.status(400).json({message: "Email already exists"})
        }

        //// 3. Hash Password: 🔒 Securely hash the password.  (WAY 1)
        // const saltRound = 5;
        // const hash_password = await bcrypt.hash(password, saltRound);
        // const userCreate = await User.create({username, phone, email, password: bcrypt.hash_password});

        const userCreate = await User.create({username, phone, email, password});

        //// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.
        res.status(201).json({
            // msg: userCreate, 
            msg: 'registeration successful', 
            token: await userCreate.generateToken(), 
            userId: userCreate._id.toString()});  
    }
    catch {
        // res.status(500).json('internal server error');  
        next(error);
        console.log (error);
    }
}

//// LOGIN 
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email}); // using same schema 'User' that was for registeration
        console.log(userExist);

        if(!userExist) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        // const user = await bcrypt.compare(password, userExist.password);    (WAY 1)
        
        const user = await userExist.comparePassword(password);
        
        if(user){
            res.status(200).json({
                // msg: userCreate, 
                msg: 'login successful', 
                token: await userExist.generateToken(), 
                userId: userExist._id.toString()});
        }
        else{
            res.status(401).json({message: "Invalid Credentials"});  
        }
    } 
    catch (error) {
        // res.status(500).json('internal server error');  
        next (error);
    }
}

//// USER: to send user data
const user = async (req, res) => {
    try{
        const userdata = req.user;
        console.log(userdata);
        return res.status(200).json({userdata})
    }catch{
        console.log(`error from user route ${error}`);
    }
};
// exports
module.exports = {home, register, login, user};