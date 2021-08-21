'use strict';

const firebase = require('../db');
const Restuarant = require('../models/food');
const firestore = firebase.firestore();

const addFood = async(req,res, next) =>{
    try {
         const id = req.params.id;
         const data = req.body;
         await firestore.collection('restuarants').doc(id).collection('foods').doc().set(data);
         res.send('Food Item added successfully');
         
    } catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addFood
}