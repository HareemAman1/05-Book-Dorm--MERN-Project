const mongoose = require ('mongoose');

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

////////// SECURING DATA USING DOTENV //////////
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log('connection successful');
    } catch (error) {
        console.error('database connection failed');
        process.exit(0)   
    }
};

// exports
module.exports = connectDb

