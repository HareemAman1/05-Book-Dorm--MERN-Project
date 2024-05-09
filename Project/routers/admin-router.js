const express = require ('express');
const router = express.Router(); 
const adminControllers = require('../controllers/admin-controller');
const middleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

router.route('/users').get(middleware, adminMiddleware, adminControllers.getAllUsers);
router.route('/users/:id').get(middleware, adminMiddleware, adminControllers.getUserbyID)
router.route('/users/update/:id').patch(middleware, adminMiddleware, adminControllers.updateUserbyID)
router.route('/users/delete/:id').delete(middleware, adminMiddleware, adminControllers.deleteUserbyID)
router.route('/contacts').get(middleware, adminControllers.getAllContacts);
router.route('/contacts/delete/:id').delete(middleware, adminMiddleware, adminControllers.deleteContactsbyID)

module.exports = router;