const express = require('express');
const router= express.Router();

const newsController = require('../app/controller/NewController');
// newsController.index;
router.use('/:slug', newsController.show);
router.use('/',newsController.index);







module.exports= router;