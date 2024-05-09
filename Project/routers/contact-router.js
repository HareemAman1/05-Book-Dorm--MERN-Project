////////// DEFINE ALL ROUTES HERE //////////
const express = require ('express');
const router = express.Router(); // like a mini app
const contactForm = require('../controllers/contact-controller')
const contactformschema = require('../validators/contact-validator')
const validate = require('../middlewares/validate-middleware');

//// defining routes  
router.route('/contact').post(validate(contactformschema), contactForm);


// export
module.exports = router;  
