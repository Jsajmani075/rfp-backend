'use strict';

const { RPF_STATUS_CONSTANTS } = require('../src/utils/public.constants');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rpfs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_text: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      ai_response: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM(Object.values(RPF_STATUS_CONSTANTS)),
        allowNull: false,
        defaultValue: RPF_STATUS_CONSTANTS.PENDING
      },
      budget_total: {
        type: Sequelize.STRING,
        allowNull: true
      },
      delivery_timeline_days: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      payment_terms: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rpfs');
  }
};