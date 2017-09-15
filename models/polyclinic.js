'use strict';
module.exports = function(sequelize, DataTypes) {
  var Polyclinic = sequelize.define('Polyclinic', {
    poli_name: DataTypes.STRING
  });

  Polyclinic.associate = function(models){
    Polyclinic.belongsToMany(models.Patient, {through: models.Patient_Polyclinic})
    Polyclinic.hasMany(models.Patient_Polyclinic, {foreignKey: 'PolyclinicId'})
  }

  return Polyclinic;
};
