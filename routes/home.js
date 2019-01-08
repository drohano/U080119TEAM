var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');

router.get('/', homeController.Index);
router.get('/team', homeController.Team)

module.exports = router;