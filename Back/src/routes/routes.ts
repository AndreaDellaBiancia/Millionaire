const express = require('express');
const RankingController = require('../controllers/RankingController');
const GameController = require('../controllers/GameController');
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');


const router = express.Router();

router.post('/registration', UserController.registration);
router.post('/auth', UserController.getToken);
router.get('/ranking', RankingController.getRanking);
router.get('/game/:level', GameController.startGame);
router.post('/game/', GameController.saveGame);

router.get('/user/:id', UserController.getUser);


 
module.exports = router;