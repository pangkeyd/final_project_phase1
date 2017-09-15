'use strict';
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define('Patient', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  });

  Patient.associate = function(models){
    Patient.belongsToMany(models.Polyclinic, {through: models.Patient_Polyclinic})
    Patient.hasMany(models.Patient_Polyclinic, {foreignKey: 'PatientId'})
  }

  return Patient;
};
