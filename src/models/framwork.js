'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Framwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Framwork.belongTo(models.LangageProgrammation,{
        primaryKey:{
          name:'id_projet_realiser',
          allowNull:false,
          onUpdate:'Cascade'
        }
      })
    }
  };
  Framwork.init({
    id_framwork: DataTypes.NUMBER,
    id_projet_realiser: DataTypes.STRING,
    nom_framwork: DataTypes.STRING,
    niveu_framwork: DataTypes.STRING,
    description_framwork: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Framwork',
  });
  return Framwork;
};