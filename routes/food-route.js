const express = require('express');
const{ addFood } = require('../controllers/foodController');

const router = express.Router();

router.put('/food/:id', addFood);

module.exports = {
    routes: router
}