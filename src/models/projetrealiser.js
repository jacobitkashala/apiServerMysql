'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjetRealiser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ProjetRealiser.belongTo(models.Client,{
        primaryKey:{
          name:'id_client',
          allowNull:false,
          onUpdate:'Cascade'
        }
      })
      
      models.ProjetRealiser.belongTo(models.LangageProgrammation,{
        primaryKey:{
          name:'id_Langage_Programmation',
          allowNull:false,
          onUpdate:'Cascade'
        }
      })
 
    }
  };
  ProjetRealiser.init({
    id_projet_realise: DataTypes.NUMBER,
    id_client: DataTypes.NUMBER,
    id_langage_programmation: DataTypes.NUMBER,
    nom_projet: DataTypes.STRING,
    description: DataTypes.STRING,
    image_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProjetRealiser',
  });
  return ProjetRealiser;
};