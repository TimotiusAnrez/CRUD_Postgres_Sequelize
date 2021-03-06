'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //no associtation needed because we already define it from
      //movies model and cast model
    }
  };
  MovieCast.init({
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MovieCast',
  });
  return MovieCast;
};