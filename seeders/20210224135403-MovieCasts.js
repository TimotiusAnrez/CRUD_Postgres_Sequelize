'use strict';
const movieCastsData = require('./movieCastSeed.json')

movieCastsData.forEach(e => {
  e.createdAt = new Date()
  e.updatedAt = new Date()
})


module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   //don't forget to seed all the require data before you seed the pivot table
   //otherwise it will be error
   //to singgle seed sequelize db:seed --seed filename 
   return queryInterface.bulkInsert('MovieCasts', movieCastsData, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('MovieCasts', null, {})
  }
};
