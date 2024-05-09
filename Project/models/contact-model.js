const {Schema, model, default: mongoose} = require('mongoose');

const contactSchema = new Schema({
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    message:{
        type: String,
        require: true,
    }, 
});

//// Create model or collection name
const Contact = new model('Contact', contactSchema) // First letter of model name is always capital
//// export
module.exports = Contact;