'use strict';
const {
  Model
} = require('sequelize');
const { RPF_STATUS_CONSTANTS } = require('../src/utils/public.constants');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Rfp', {
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
      allowNull: false
    },
    budgetTotal: {
      type: DataTypes.DOUBLE,
      allowNull: fasle
    },
    deliveryTimelineDays: {
      type: DataTypes.INTEGER,
      allowNull: fasle
    },
    paymentTerms: {
      type: DataTypes.STRING,
      allowNull: fasle
    }
  }, {
    sequelize,
    tableName: 'rfps',
    schema: 'public',
    timestamps: true,
    underscored: true,
  })
};