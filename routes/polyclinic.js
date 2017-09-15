const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.Polyclinic.findAll()
  .then(function(polyclinic){
    res.render('polyclinic', {data: polyclinic, title: 'Polyclinic'})
  })
})

routers.get('/add', function(req, res){
  res.render('polyclinicAdd', {title: 'Add Polyclinic'})
})

routers.post('/add', function(req, res){
  models.Polyclinic.build({
    poli_name: req.body.pn,
    createdAt: new Date()
  })
  .save().then(function(polyclinic){
    res.redirect('/polyclinic')
  })
})

routers.get('/edit/:id', function(req, res){
  models.Polyclinic.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function(polyclinic){
    res.render('polyclinicEdit', {data: polyclinic, title: 'Edit Polyclinic'})
  })
})

routers.post('/edit/:id', function(req, res){
  models.Polyclinic.update({
    poli_name: req.body.pn,
    updatedAt: new Date()
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(polyclinic){
    res.redirect('/polyclinic')
  })
})

module.exports = routers
