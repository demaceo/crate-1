"use strict";

// Product
module.exports = function (sequelize, DataTypes) {
  return sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.TEXT,
    },
  });
};

// type is actually an integer that associates the product with whether it is
//an article of clothing or accessory

// each product will need a "style type" (ex goth, beachwear, casual, business )
