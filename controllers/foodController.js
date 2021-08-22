'use strict';

const firebase = require('../db');
const Food = require('../models/food');
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

const getFood = async(req, res, next) => {
    try{
        const id = req.params.id;
        const foods = await firestore.collectionGroup('foods') .where('uniq_id', '==', id);
        const data = await foods.get();
        if(data.empty) {
            res.status(404).send('No food record found');
        }else {
            data.forEach(doc => {
                res.send(doc.data());
              });
        }
    }
    catch(error) {
        res.status(400).send(error.message);
    }
}

const getfoodID = async(req, res, next) => {
    try{
        const id = req.params.id;
        const foods = await firestore.collectionGroup('foods') .where('uniq_id', '==', id);
        const data = await foods.get();
        if(data.empty) {
            res.status(404).send('No food record found');
        }else {
            data.forEach(doc => {
                res.send(doc.id);
              });
        }
    }
    catch(error) {
        res.status(400).send(error.message);
    }
}

const updateFood = async(req, res, next) => {
    try{
        const restuarant_id = req.params.restuarantid;
        const food_id = req.params.foodid;
        const data = req.body;
        await firestore.collection('restuarants').doc(restuarant_id).collection('foods').doc(food_id).update(data);
        res.send('Food updated successfully');
    }
    catch(error) {
        res.status(400).send(error.message);
    }
}

const deleteFood = async (req, res, next) => {
    try {
        const restuarant_id = req.params.restuarantid;
        const food_id = req.params.foodid;
        const data = req.body;
        await firestore.collection('restuarants').doc(restuarant_id).collection('foods').doc(food_id).delete();
        res.send('Food deleted successfully');
    }
    catch(error) {
        res.status(400).send(error.message);
    }
}

const getAllFoodsbyRestuarant = async(req,res, next) =>{
    try{
        const id = req.params.id;
        const foods = await firestore.collection('restuarants').doc(id).collection('foods').where('status', '==', 'active');
        const data = await foods.get();
        const foodsArray = [];
        if(data.empty) {
            res.status(404).send('No food record found');
        }else {
            data.forEach(doc => {
                const food = new Food(
                    doc.id,
                    doc.data().uniq_id,
                    doc.data().food_title,
                    doc.data().category_title,
                    doc.data().description,
                    doc.data().status
                );
                foodsArray.push(food);
            });
            res.send(foodsArray);
        }
    }
    catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addFood,
    getFood,
    getfoodID,
    updateFood,
    deleteFood,
    getAllFoodsbyRestuarant
}