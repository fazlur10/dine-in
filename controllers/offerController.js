'use strict';

const firebase = require('../db');
const Offer = require('../models/offer');
const firestore = firebase.firestore();

const addOffer = async(req,res, next) =>{
    try {
         const id = req.params.id;
         const data = req.body;
         await firestore.collection('restuarants').doc(id).collection('offers').doc().set(data);
         res.send('Offer added successfully');
         
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const getAllOffers = async(req,res, next) =>{
    try{
        const offers = await firestore.collectionGroup('offers') .where('status', '==', 'active');
        const data = await offers.get();
        const offersArray = [];
        if(data.empty) {
            res.status(404).send('No offer record found');
        }else {
            data.forEach(doc => {
                const offer = new Offer(
                    doc.id,
                    doc.data().uniq_id,
                    doc.data().heading,
                    doc.data().description,
                    doc.data().terms,
                    doc.data().promocode,
                    doc.data().start_date,
                    doc.data().end_date,
                    doc.data().food_title,
                    doc.data().category_title
                );
                offersArray.push(offer);
            });
            res.send(offersArray);
        }
    }
    catch(error) {
        res.status(400).send(error.message);
    }
}

const getOffer = async(req, res, next) => {
    try{
        const id = req.params.id;
        const offers = await firestore.collectionGroup('offers') .where('uniq_id', '==', id);
        const data = await offers.get();
        if(data.empty) {
            res.status(404).send('No offer record found');
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

const getOfferID = async(req, res, next) => {
    try{
        const id = req.params.id;
        const offers = await firestore.collectionGroup('offers') .where('uniq_id', '==', id);
        const data = await offers.get();
        if(data.empty) {
            res.status(404).send('No offer record found');
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

const updateOffer = async(req, res, next) => {
    try{
        const restuarant_id = req.params.restuarantid;
        const offer_id = req.params.offerid;
        const data = req.body;
        await firestore.collection('restuarants').doc(restuarant_id).collection('offers').doc(offer_id).update(data);
        res.send('Offer updated successfully');
    }
    catch(error) {
        res.status(400).send(error.message);
    }
}

const deleteOffer = async (req, res, next) => {
    try {
        const restuarant_id = req.params.restuarantid;
        const offer_id = req.params.offerid;
        const data = req.body;
        await firestore.collection('restuarants').doc(restuarant_id).collection('offers').doc(offer_id).delete();
        res.send('Offer deleted successfully');
    }
    catch(error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    addOffer, 
    getAllOffers,
    getOffer,
    getOfferID,
    updateOffer,
    deleteOffer
}