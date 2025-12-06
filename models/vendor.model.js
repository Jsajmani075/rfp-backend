'use strict';
const {
  Model
} = require('sequelize');
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
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vendors',
    schema: 'public',
    timestamps: true,
    underscored: true,
  })
  Vendor.associate = function (model) {
    Vendor.hasMany(model.Proposal, { foreignKey: 'vendor_id' });

  }
  return Vendor
};