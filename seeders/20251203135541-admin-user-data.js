'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'admin@1234',
      email: 'superadmin@gmail.com',
      password: '$2b$12$GUcThczmOUCuhcIjbrpl2u.yvvfSw0jdP2uCvQCEQN2rQwFpuC3Gu',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})

  }
};
