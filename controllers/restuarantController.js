'use strict';

const firebase = require('../db');
const Restuarant = require('../models/restuarant');
const firestore = firebase.firestore();

const addRestuarant = async(req,res, next) =>{
    try {
         const data = req.body;
         await firestore.collection('restuarants').doc().set(data);
         res.send('Restuarant added successfully');
    } catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addRestuarant
}