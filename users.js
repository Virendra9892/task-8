var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

/* GET users listing. */
router.post('/create', userController.createUser);

module.exports = router;
