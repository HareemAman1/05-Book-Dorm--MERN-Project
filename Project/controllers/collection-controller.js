const Collection = require('../models/collection-model');

const collection = async (req, res) => {
    try{
        const response = await Collection.find();
        if(!response){
            return res.status(404).json("No collection found");

        }
        res.status(200).json(response);
    }
    catch (error){
        return res.status(500).json("error");
    }
}

module.exports = collection;