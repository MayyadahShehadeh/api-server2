'use strict';

module.exports = (req, res, next) => {

    let reqName = req.query.name;

    if (!reqName) {
        next('enter a name !!');
    } else {
        next();
    }

}