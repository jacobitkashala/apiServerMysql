'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LangageProgrammation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LangageProgrammation.init({
    id_Langage_Programmation: DataTypes.NUMBER,
    nom_langaga: DataTypes.STRING,
    description_langage: DataTypes.STRING,
    logoPath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LangageProgrammation',
  });
  return LangageProgrammation;
};