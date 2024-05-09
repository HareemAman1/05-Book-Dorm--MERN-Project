////////// SCHEMA: contains structure of document //////////
const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
});

//// REGISTERATION
//// 3. Hash Password: 🔒 Securely hash the password.  (WAY 2)
//// 4. Create User: 📝 Create a new user with hashed password.
//// 5. Save to DB: 💾 Save user data to the database.
userSchema.pre('save', async function (next) {
    // console.log('pre method', this);     // gives detail on console

    const user = this;
    //// to check if password is modified
    if(!user.isModified ('password')){
        next();  //save in database
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } 
    catch (error) {
        next(error);
    }
});

//// LOGIN
//// compare password (WAY 2)
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

//// json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRECT_KEY, {
            expiresIn: '30d',
        }
        )
    } 
    catch (error) {
        console.log(error);
    }
};

//// Create model or collection name
const User = new mongoose.model('User', userSchema) // this 'User' collection when goes in database becomes 'users'

//// export
module.exports = User;