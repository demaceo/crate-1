"use strict";

// Subscription
module.exports = function (sequelize, DataTypes) {
  let Subscription = sequelize.define("subscriptions", {
    userId: {
      type: DataTypes.INTEGER,
    },
    crateId: {
      type: DataTypes.INTEGER,
    },
  });

  Subscription.associate = function (models) {
    Subscription.belongsTo(models.User);
    Subscription.belongsTo(models.Crate);
  };

  return Subscription;
};

//add a style category to the subscription based on what a user has selected
