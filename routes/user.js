const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');


router.get('/',userController.getLogIn);

router.post('/login',userController.postLogIn)

router.post('/stop',userController.postStopPage)

module.exports = router;