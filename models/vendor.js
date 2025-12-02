'use strict';
const {
  Model
} = require('sequelize');
const { VENDOR_TYPE_CONSTANTS } = require('../src/utils/public.constants');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Vendor', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    VendorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    VendorEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM(Object.values(VENDOR_TYPE_CONSTANTS)),
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    underscored: true,
  })
};