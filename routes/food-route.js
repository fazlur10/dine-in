const express = require('express');
const{ addFood,getFood,getfoodID,updateFood,deleteFood,getAllFoodsbyRestuarant } = require('../controllers/foodController');

const router = express.Router();

router.put('/food/:id', addFood);
router.get('/food/:id', getFood);
router.get('/food/id/:id', getfoodID);
router.put('/food/update/:restuarantid&:foodid', updateFood);
router.delete('/food/:restuarantid&:foodid', deleteFood);
router.get('/food/byRestuarant/:id', getAllFoodsbyRestuarant);


module.exports = {
    routes: router
}