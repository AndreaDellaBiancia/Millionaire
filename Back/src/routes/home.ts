const express = require('express');
const MainController = require('../controllers/MainController');

const router = express.Router();

router.get('/', MainController.home);
 


 

module.exports = router;