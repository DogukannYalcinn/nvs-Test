const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/logIn',adminController.getLogin);

router.post('/login',adminController.postLogin);

module.exports = router;