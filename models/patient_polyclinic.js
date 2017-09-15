'use strict';
module.exports = function(sequelize, DataTypes) {
  var Patient_Polyclinic = sequelize.define('Patient_Polyclinic', {
    PatientId: DataTypes.INTEGER,
    PolyclinicId: DataTypes.INTEGER
  });

  Patient_Polyclinic.associate = function(models){
    Patient_Polyclinic.belongsTo(models.Patient, {foreignKey: 'PatientId'})
    Patient_Polyclinic.belongsTo(models.Polyclinic, {foreignKey: 'PolyclinicId'})
  }

  return Patient_Polyclinic;
};
