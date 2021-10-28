'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LangageProgrammations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_Langage_Programmation: {
        type: Sequelize.NUMBER
      },
      nom_langaga: {
        type: Sequelize.STRING
      },
      description_langage: {
        type: Sequelize.STRING
      },
      logoPath: {
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
    await queryInterface.dropTable('LangageProgrammations');
  }
};