'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const dateNow = new Date();
    await queryInterface.bulkInsert("Categories", [
    
    {
      id: 1,
      name: "Buku Pelajaran",
      createdAt: dateNow,
      updatedAt: dateNow,
    },
    {
      id: 2,
      name: "Fiksi",
      createdAt: dateNow,
      updatedAt: dateNow,
    },
    {
      id: 3,
      name: "Non-Fiksi",
      createdAt: dateNow,
      updatedAt: dateNow,
    },
    {
      id: 4,
      name: "Novel",
      createdAt: dateNow,
      updatedAt: dateNow,
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
  }
};
