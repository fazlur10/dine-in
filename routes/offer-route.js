const express = require('express');
const{ addOffer,getAllOffers,getOffer,getOfferID,updateOffer,deleteOffer } = require('../controllers/offerController');

const router = express.Router();

router.get('/offer/:id', getOffer);
router.get('/offer/id/:id', getOfferID);
router.get('/offers', getAllOffers);
router.put('/offer/:id', addOffer);
router.put('/offer/update/:restuarantid&:offerid', updateOffer);
router.delete('/offer/:restuarantid&:offerid', deleteOffer);


module.exports = {
    routes: router
}