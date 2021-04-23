'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movies.belongsTo(models.ProductionHouses)
      //now it's time to connect movie to cast through the pivot table
      //in this case is MovieCast
      Movies.belongsToMany(models.Cast,{
        through:models.MovieCast,
        foreignKey:'movieId'
      })
    }
  };
  Movies.init({
    name: DataTypes.STRING,
    released_year: {
      DataTypes:NUMBER,
      validate:{
        isLeapYear(value) {
          if (parseInt(value) % 4 !== 0) {
            throw new Error(`must not in leap year`);
          }
        }
      }},
    genre: DataTypes.STRING,
    ProductionHouseId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movies',
  });
  
  return Movies;
};




