'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sgbd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Sgbd.belongTo(models.LangageProgrammation,{
        primaryKey:{
          name:'id_Langage_Programmation',
          allowNull:false,
          onUpdate:'Cascade'
        }
      })
    }
  };
  Sgbd.init({
    nom_sgbd: DataTypes.STRING,
    nom_sgbd_bd: DataTypes.STRING,
    id_projet_realiser: DataTypes.NUMBER,
    niveau: DataTypes.STRING,
    id_sgbd: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Sgbd',
  });
  return Sgbd;
};