const express = require("express");
const RankingController = require("../controllers/RankingController");
const GameController = require("../controllers/GameController");
const UserController = require("../controllers/UserController");
const AdminController = require("../controllers/AdminController");

const auth = require("../middleware/auth");

const router = express.Router();

router.post("/registration", UserController.registration);
router.post("/auth", UserController.getToken);
router.get("/ranking", RankingController.getRanking);
router.get("/game/:level", GameController.startGame);
router.post("/game/save", auth, GameController.saveGame);
router.get("/games/:userId", auth, GameController.getGamesByUser);

router.get("/user/:id", auth, UserController.getUser);

router.get("/admin", auth, AdminController.getQuestions);


module.exports = router;
