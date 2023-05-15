'use strict';

let clothes = (sequelize, Datatypes) => sequelize.define('clothe', {

    clotheName: {
        type: Datatypes.STRING,
        allowNull: false
    }

})

module.exports = clothes;