'use strict';
const {
  Model
} = require('sequelize');
const { RPF_STATUS_CONSTANTS, PROPOSAL_STATUS_CONSTANTS } = require('../src/utils/public.constants');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Proposal', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    rfpId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aiResponse: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    emailBodyContent: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    aiContent: {
      type: DataTypes.JSONB,
      allowNull: fasle
    },
    status: {
      type: DataTypes.ENUM(Object.values(PROPOSAL_STATUS_CONSTANTS)),
      allowNull: fasle
    },
    aiRank: {
      type: DataTypes.INTEGER,
      allowNull: fasle
    }
  }, {
    sequelize,
    tableName: 'proposals',
    schema: 'public',
    timestamps: true,
    underscored: true,
  })
};