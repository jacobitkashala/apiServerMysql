'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sgbds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_projet_realiser: {
        type: Sequelize.INTEGER
      },
      nom_sgbd: {
        type: Sequelize.STRING
      },
      nom_sgbd_bd: {
        type: Sequelize.STRING
      },
      niveau: {
        type: Sequelize.STRING
      },
      id_sgbd: {
        type: Sequelize.NUMBER,
        allowNull: false,
        autoIncrement: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sgbds');
  }
};