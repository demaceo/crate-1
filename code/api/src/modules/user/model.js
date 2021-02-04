"use strict";

// User
module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Subscription);
  };

  return User;
};

// add style category so that the database has a relationship betweeen
//the new style column and that a user will be able to have a "style"
