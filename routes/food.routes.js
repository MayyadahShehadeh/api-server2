'use strict';

const express = require('express');
// const { Food } = require('../src/models/index');
const router = express.Router();
const {foodCollection} = require('../src/models/index');
// Routes
router.get('/food', getFood);
router.post('/food', addFood);
router.get('/food/:id', getOneFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


// localhost:3000/food
async function getFood(req, res) {
    let food = await foodCollection.readRecord();
    res.status(200).json(food);
}

async function addFood(req, res) {
    let newFood = req.body;
    // console.log('new food', newFood);
    let createFood = await foodCollection.createRecord(newFood);
    res.status(201).json(createFood);
}

async function getOneFood(req, res) {
    let foodId = parseInt(req.params.id);
    let getOneFood = await foodCollection.readRecord(foodId)
    res.status(200).json(getOneFood);
}

async function updateFood(req, res) {
    let foodId = parseInt(req.params.id);
    let newObj = req.body;
    let updateFood = await foodCollection.updateRecord(foodId, newObj);
    // let getFood = await Food.findOne({ where: { id: foodId } });
    // let updateFood = await getFood.update(newObj);
    res.status(200).json(updateFood);
}

async function deleteFood(req, res) {
    let foodId = parseInt(req.params.id);
    let deleteFood = await foodCollection.deleteRecord(foodId);
    res.status(200).json(deleteFood);
}

module.exports = router;