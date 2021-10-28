'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProjetRealisers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_projet_realise: {
        type: Sequelize.NUMBER,
        allowNull: false,
        autoIncrement: true,
      },
      id_client: {
        type: Sequelize.NUMBER,
        reference:{
          model: "Clients",
          key:'id_client'
        }
      },
      id_langage_programmation: {
        type: Sequelize.NUMBER
      },
      nom_projet: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image_path: {
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
    await queryInterface.dropTable('ProjetRealisers');
  }
};