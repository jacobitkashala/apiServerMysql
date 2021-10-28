'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Framworks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_framwork: {
        type: Sequelize.NUMBER
      },
      id_projet_realiser: {
        type: Sequelize.STRING,
        reference:{
          model: "ProjetRealisers",
          key:'id_projet_realise'
        }
      },
      nom_framwork: {
        type: Sequelize.STRING
      },
      niveu_framwork: {
        type: Sequelize.STRING
      },
      description_framwork: {
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
    await queryInterface.dropTable('Framworks');
  }
};