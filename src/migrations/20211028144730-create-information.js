'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Information', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.STRING
      },
      mot_pass: {
        type: Sequelize.STRING
      },
      postnom: {
        type: Sequelize.STRING
      },
      nationalite: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      niveau: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Information');
  }
};