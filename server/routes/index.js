var express = require('express');
var router = express.Router();

var indexModels = require('../models/indexModel.js');

/* GET home page. */
router.get('/',indexModels.index);

module.exports = router;
