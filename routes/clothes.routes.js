'use strict';

const express = require('express');
const router = express.Router();
const {clotheCollection} = require('../src/models/index');

// Routes
router.get('/clothe', getClothe);
router.post('/clothe', addClothe);
router.get('/clothe/:id', getOneClothe);
router.put('/clothe/:id', updatecClothe);
router.delete('/clothe/:id', deleteClothe);


// localhost:3000/clothe
async function getClothe(req, res) {
    let clothe = await clotheCollection.readRecord();
    res.status(200).json(clothe);
}

async function addClothe(req, res) {
    let newClothe = req.body;
    // console.log('new clothe', newClothe);
    let createClothe = await clotheCollection.createRecord(newClothe);
    res.status(201).json(createClothe);
}

async function getOneClothe(req, res) {
    let clotheId = parseInt(req.params.id);
    let getOneClothe = await clotheCollection.readRecord(clotheId)
    res.status(200).json(getOneClothe);
}

async function updatecClothe(req, res) {
    let clotheId = parseInt(req.params.id);
    let newObj = req.body;
    let updateClothe = await clotheCollection.updateRecord(clotheId, newObj);
    res.status(200).json(updateClothe);
}

async function deleteClothe(req, res) {
    let clotheId = parseInt(req.params.id);
    let deleteClothe = await clotheCollection.deleteRecord(clotheId);
    res.status(200).json(deleteClothe);
}

module.exports = router;