'use strict';
const {
  Model
} = require('sequelize');
const { Cast } = require('sequelize/types/lib/utils');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cast.belongsToMany(models.Movies,{
        through:models.MovieCast,
        foreignKey:'castId'
      })
    }
  };
  Cast.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cast',
  });
  Cast.afterCreate((instance, option) => {
    let changeName = instance.first_name + " " + instance.last_name
    if(instance.gender === female){
      instance.name = "Mrs "+ changeName
    }else{
      instance.name = "Mr " + changeName
    }
  })
  return Cast;
};