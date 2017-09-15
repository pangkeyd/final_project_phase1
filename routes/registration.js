const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.Patient_Polyclinic.findAll({
    attributes: ['id'],
    include: [{
      all: true
    }]
  })
  .then(function(patpol){
    res.render('registration', {data: patpol, title: 'Registration'})
  })
})

routers.get('/add-poli', function(req, res){
  models.Patient.findAll()
  .then(function(patient){
    models.Polyclinic.findAll()
    .then(function(polyclinic){
      res.render('registrationAdd', {data: patient, dataPol: polyclinic, title: 'Add Registration'})
    })
  })
})

routers.post('/add-poli', function(req, res){
  models.Patient_Polyclinic.build({
    PatientId: req.body.patName,
    PolyclinicId: req.body.polName
  })
  .save().then(function(patpol){
    res.redirect('/registration')
  })
})

module.exports = routers
