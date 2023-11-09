const express = require('express');
const RankingController = require('../controllers/RankingController');
const GameController = require('../controllers/GameController');
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');


const router = express.Router();

router.post('/registration', UserController.registration);
router.get('/auth', UserController.getToken);
router.get('/ranking', RankingController.getRanking);
router.post('/game', GameController.startGame);

 
module.exports = router;