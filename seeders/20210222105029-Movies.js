'use strict';
const fs = require('fs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let dataInput = fs.readFileSync('./seeders/movieSeed.json', 'utf8')

   let data =JSON.parse(dataInput)
   let newData = []
   data.forEach(element => {
     element.createdAt = new Date()
     element.updatedAt = new Date()
     element.name_prodHouseId = Math.ceil(Math.random()*5)
     newData.push(element)
   });
   return queryInterface.bulkInsert('Movies', newData, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Movies', null, {})
  }
};
