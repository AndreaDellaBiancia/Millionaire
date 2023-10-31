const express = require('express');
const RankingController = require('../controllers/RankingController');
const GameController = require('../controllers/GameController');


const router = express.Router();

router.get('/ranking', RankingController.getRanking);
router.post('/game', GameController.startGame);

 
module.exports = router;