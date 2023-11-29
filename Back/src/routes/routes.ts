const express = require("express");
const RankingController = require("../controllers/RankingController");
const GameController = require("../controllers/GameController");
const UserController = require("../controllers/UserController");
const AdminController = require("../controllers/AdminController");
const ResetPasswordController = require("../controllers/ResetPasswordController");

// Authorizations
const authUser = require("../middleware/authUser");
const authAdmin = require("../middleware/authAdmin");
const authSuperAdmin = require("../middleware/authSuperAdmin");

const router = express.Router();

// Routes utilisateur non connecté
router.post("/registration", UserController.registration);
router.post("/auth", UserController.getToken);
router.get("/ranking", RankingController.getRanking);
router.get("/game/:level", GameController.startGame);

router.post("/forgot-password", ResetPasswordController.createTokenResetPassword);
router.post("/update-password", ResetPasswordController.updatePassword);



// Routes utilisateur connecté
router.post("/game/save", authUser, GameController.saveGame);
router.get("/games/:userId", authUser, GameController.getGamesByUser);
router.get("/user/:id", authUser, UserController.getUser);

// Routes Admin
router.get("/admin/questions", authAdmin, AdminController.getQuestions);
router.get("/admin/view-question/:questionId", authAdmin, AdminController.getQuestionById);

// Routes Super Admin 
router.put("/admin/update-question", authSuperAdmin, AdminController.updateQuestion);
router.delete("/admin/delete-question/:questionId", authSuperAdmin, AdminController.deleteQuestion);
router.post("/admin/create-question", authSuperAdmin, AdminController.createQuestion);
router.get("/admin/users-list", authSuperAdmin, AdminController.getUsersList);

module.exports = router;
