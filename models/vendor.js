'use strict';
const {
  Model
} = require('sequelize');
const { VENDOR_TYPE_CONSTANTS } = require('../src/utils/public.constants');
module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendor', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    vendorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendorEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM(Object.values(VENDOR_TYPE_CONSTANTS)),
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Vendors',
    schema: 'public',
    timestamps: true,
    underscored: true,
  })
  return Vendor
};