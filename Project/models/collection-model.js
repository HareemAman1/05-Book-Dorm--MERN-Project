const { Schema, model, Mongoose } = require ("mongoose");

const collectionSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    genre:{
        type: String,
        require: true,
    },
    author:{
        type: String,
        require: true,
    }, 
    number_of_books:{
        type: String,
        require: true,
    }, 
});

//// Create model or collection name
const Collection = new model('Collection', collectionSchema); // First letter of model name is always capital
//// export
module.exports = Collection;