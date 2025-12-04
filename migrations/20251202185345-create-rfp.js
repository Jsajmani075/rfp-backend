'use strict';

const { RPF_STATUS_CONSTANTS, RPF_TYPE_CONSTANTS } = require('../src/utils/public.constants');

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
      user_text: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ai_response: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM(Object.values(RPF_STATUS_CONSTANTS)),
        allowNull: false
      },
      budget_total: {
        type: Sequelize.DOUBLE,
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
      rpf_type: {
        type: DataTypes.ENUM(Object.values(RPF_TYPE_CONSTANTS)),
        allowNull: false,
        defaultValue: RPF_TYPE_CONSTANTS.SOFTWARE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rfps');
  }
};