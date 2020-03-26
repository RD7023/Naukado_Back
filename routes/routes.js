const express = require('express');
const {check} = require('express-validator')

const controllers = require('../controllers/controllers')
const fileUpload = require('../middleware/file-upload')

const router = express.Router();

router.get('/',controllers.getBooksAndTasks);


module.exports = router;