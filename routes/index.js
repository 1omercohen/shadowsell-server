const express = require('express')
const globalErrorHandler = require('../controllers/error')
const AppError = require('../utils/appError')
const router = express.Router()


router.use('/user', require('./user'))

router.get('/ruk', (req,res)=>{
        res.status(200).json({
        status: 'success',

     });
})

router.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
});

router.use(globalErrorHandler);

module.exports = router