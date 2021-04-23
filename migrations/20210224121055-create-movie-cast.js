'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('MovieCasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      //remember to add this as foreign key, if you forgot better undo the
      //migration rather than continuing on with making magriation add constrain
      //before migrating or it will be pain in the ass later
      movieId:{
        type:Sequelize.INTEGER,
        references:{
          model:'Movies',
          key:'id'
        }
      },
      castId:{
        type:Sequelize.INTEGER,
        references:{
          model:'Casts',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MovieCasts');
  }
};