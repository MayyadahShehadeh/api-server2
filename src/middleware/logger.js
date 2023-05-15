'use strict';

const logger = (req,res,next) =>{

console.log('Helloo from logger middleware !!!');

req.reqDate = new Date().toLocaleDateString();
console.log('Logged Date : ',req.reqDate);

    next();
}

module.exports = logger;