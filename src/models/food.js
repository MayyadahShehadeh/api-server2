'use strict';

let food = (sequelize, Datatypes) => sequelize.define('food', {

    foodName: {
        type: Datatypes.STRING,
        allowNull: false
    }

})


module.exports = food;


