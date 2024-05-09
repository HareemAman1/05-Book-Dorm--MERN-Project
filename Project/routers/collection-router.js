////////// DEFINE ALL ROUTES HERE //////////
const express = require ('express');
const router = express.Router(); // like a mini app
const collections = require('../controllers/collection-controller') 


//// defining routes  
router.route('/collections').get(collections);


// export
module.exports = router;  
