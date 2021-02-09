'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'subscriptions',
      'styleType',
     Sequelize.TEXT
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'subscriptions',
      'styleType'
    );
  }
};
