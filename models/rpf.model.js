'use strict';
const {
  Model
} = require('sequelize');
const { RPF_STATUS_CONSTANTS } = require('../src/utils/public.constants');
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
      type: DataTypes.STRING,
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
  }, {
    sequelize,
    tableName: 'rpfs',
    schema: 'public',
    timestamps: true,
    underscored: true,
  })
  Rpf.associate = function (model) {
    Rpf.hasMany(model.Proposal, { foreignKey: 'rpfId' })
  }
  return Rpf
};