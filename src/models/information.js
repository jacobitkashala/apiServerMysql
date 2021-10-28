'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Information.init({
    nom: DataTypes.STRING,
    login: DataTypes.STRING,
    mot_pass: DataTypes.STRING,
    postnom: DataTypes.STRING,
    nationalite: DataTypes.STRING,
    prenom: DataTypes.STRING,
    ville: DataTypes.STRING,
    pays: DataTypes.STRING,
    niveau: DataTypes.STRING,
    adress: DataTypes.STRING,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Information',
  });
  return Information;
};