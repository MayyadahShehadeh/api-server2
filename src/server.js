'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');
const errorHandler = require('./error-handlers/505');
const notFound = require('./error-handlers/404');
const validator = require('./middleware/validator');
const foodRoutes = require('../routes/food.routes');
const clothRoutes = require('../routes/clothes.routes');


// ----- MIDDLEWARES ----
app.use(express.json());
app.use(cors());
app.use(logger);
app.use(foodRoutes);
app.use(clothRoutes);

// app.use(validator);

// ----- ENDPOINTES ------
app.get('/', (req,res) =>{
    res.send('home route');
})

// localhost:3000/person?name=mayadah
app.get('/person',validator, (req,res) =>{
    res.send({
        name: req.query.name
    }); 
})


app.use('*',notFound);
app.use(errorHandler);

function start(port){
    app.listen(port, () =>{
        console.log(`listening on ${port}`);
    })
}

module.exports={
    app:app,
    start:start,
}