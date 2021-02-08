'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'products',
      'styleType',
     Sequelize.TEXT
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'products',
      'styleType'
    );
  }
};
