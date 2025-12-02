'use strict';

const { PROPOSAL_STATUS_CONSTANTS } = require('../src/utils/public.constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proposals', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      rfpId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      vendorId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      aiResponse: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      emailBodyContent: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      aiContent: {
        type: Sequelize.JSONB,
        allowNull: fasle
      },
      status: {
        type: Sequelize.ENUM(Object.values(PROPOSAL_STATUS_CONSTANTS)),
        allowNull: fasle
      },
      aiRank: {
        type: Sequelize.INTEGER,
        allowNull: fasle
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proposals');
  }
};