'use strict';

const { RPF_STATUS_CONSTANTS } = require('../src/utils/public.constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rfps', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userText: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      aiResponse: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM(Object.values(RPF_STATUS_CONSTANTS)),
        allowNull: false
      },
      budgetTotal: {
        type: Sequelize.DOUBLE,
        allowNull: fasle
      },
      deliveryTimelineDays: {
        type: Sequelize.INTEGER,
        allowNull: fasle
      },
      paymentTerms: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Rfps');
  }
};