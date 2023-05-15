'use strict';

const { Sequelize, DataTypes } = require('sequelize'); // npm i pg sequelize
const food = require('./food');
const Collection = require('./collection-class');
const clothe = require('./clothes');

const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;  // npm i sqlite3 
// we use this condition to run the test in sqlite if we are testing, else we are not testing and we use real database so run the DB.

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};


let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

// CREATE NEW MODEL
let foodModel = food(sequelize, DataTypes);
let clotheModel = clothe(sequelize, DataTypes);

// CREATE NEW COLLECTION
let foodCollection = new Collection(foodModel);
let clotheCollection = new Collection(clotheModel);


module.exports = {
    db: sequelize, //for real connection and will use it in index.js
    foodCollection: foodCollection, // for creating the table and will use it in our routes
    clotheCollection:clotheCollection
}