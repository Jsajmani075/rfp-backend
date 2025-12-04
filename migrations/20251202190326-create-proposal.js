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
      rfp_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      vendor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ai_response: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      email_body_content: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      ai_content: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM(Object.values(PROPOSAL_STATUS_CONSTANTS)),
        allowNull: false,
        defaultValue: PROPOSAL_STATUS_CONSTANTS.PENDING
      },
      ai_rank: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proposals');
  }
};