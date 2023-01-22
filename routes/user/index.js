const express = require('express')
const controller = require('../../controllers/user')
const router = express.Router();
const protected = require('../../middlewares/auth')

router.post('/signup', controller.signup);
router.post('/login', controller.login);

// router.post('/forgotPassword', controller.forgotPassword);
router.patch('/resetPassword/:token', controller.resetPassword);

router.patch(
    '/updateMyPassword',
    protected,
    controller.updatePassword
);


module.exports = router