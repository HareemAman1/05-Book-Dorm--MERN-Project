////////// DEFINE ALL ROUTES HERE //////////
const express = require ('express');
const router = express.Router(); // like a mini app
const controller = require('../controllers/auth-controller')
const signupSchema = require ('../validators/auth-validator')
const loginSchema = require ('../validators/login-validator')
const validate = require('../middlewares/validate-middleware');
const middleware = require('../middlewares/auth-middleware');

//// defining routes  
router.route('/').get(controller.home);
router.route('/register').post(validate(signupSchema), controller.register);
router.route('/login').post(validate(loginSchema), controller.login);
router.route('/user').get(middleware,controller.user);

// export
module.exports = router;  
