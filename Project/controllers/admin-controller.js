// ADMIN-USER LOGIC 
const User = require('../models/user-model')
const getAllUsers = async (req, res) =>  {
    try {
        const users = await User.find({}, {password:0});
        console.log(users);
        if(!users || users.length === 0){
            return res.status(404).json({message: "No Users Found"}); 
        }
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }

};

// ADMIN-CONTACT LOGIC 
const Contact = require('../models/contact-model')
const getAllContacts = async (req, res) =>  {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message: "No contacts Found"}); 
        }
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }

};

// ADMIN-DELETE LOGIC 
// const deleteUserbyID = async(req, res) => {
//     try {
//         const id = req.params.id;
//         await User.deleteOne({_id: id})
//         return res.status(200).json({message: 'user deleted'})
//     } catch (error) {
//         next(error);
//     }
// };
const deleteUserbyID = async(req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        const adminRole = req.user.isAdmin
        if (adminRole) {
            // Check if the user is trying to delete their own account
            if (user._id.toString() === req.user._id.toString()) {
                return res.status(403).json({ message: "You can't delete admin account" });
            }
        }
        await User.deleteOne({_id: id})
        return res.status(200).json({message: 'user deleted'})
    } catch (error) {
        next(error);
    }
};



// ADMIN-EDIT LOGIC 
const getUserbyID = async(req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id: id}, {password:0});
        return res.status(200).json(data)
    } catch (error) {
        next(error);
    }

};

// ADMIN-UPDATE LOGIC 
const updateUserbyID = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedUserdata = req.body;

        const updatedData = await User.updateOne({_id: id}, 
            {
                $set: updatedUserdata,
            });
        return res.status(200).json(updatedData)

    } catch (error) {
        next (error);
    }
}

// ADMIN-CONTACT- DELETE LOGIC 
const deleteContactsbyID = async(req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id})
        return res.status(200).json({message: 'contact deleted'})
    } catch (error) {
        next(error);
    }

};

module.exports = {getAllUsers, getAllContacts, deleteUserbyID, getUserbyID, updateUserbyID, deleteContactsbyID};


