'use strict';
const {
  Model
} = require('sequelize');
const { RPF_STATUS_CONSTANTS, RPF_TYPE_CONSTANTS } = require('../src/utils/public.constants');
module.exports = (sequelize, DataTypes) => {
  const Rpf = sequelize.define('Rpf', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    userText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aiResponse: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM(Object.values(RPF_STATUS_CONSTANTS)),
      allowNull: false,
      defaultValue: RPF_STATUS_CONSTANTS.PENDING
    },
    budgetTotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    deliveryTimelineDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paymentTerms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rpfType: {
      type: DataTypes.ENUM(Object.values(RPF_TYPE_CONSTANTS)),
      allowNull: false,
      defaultValue: RPF_TYPE_CONSTANTS.SOFTWARE
    }
  }, {
    sequelize,
    tableName: 'Rfps',
    schema: 'public',
    timestamps: true,
    underscored: true,
  })
  return Rpf
};