const express = require('express');
const{ addRestuarant } = require('../controllers/restuarantController');

const router = express.Router();

router.post('/restuarant', addRestuarant);

module.exports = {
    routes: router
}