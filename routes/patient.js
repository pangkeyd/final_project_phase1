const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.Patient.findAll()
  .then(function(patient){
    res.render('patient', {data: patient, title: 'Patient'})
  })
})

routers.post('/', function(req, res){
  models.Patient.findAll({
    where: {
      first_name: req.body.search
    }
  })
  .then(function(result){
    res.render('search', {data: result, title: 'Search'})
  })
})

// routers.get('/:num', function(req, res){
//   models.Patient.finc
// })

// routers.post('/', function(req, res){
//   models.Patient.findAndCountAll({
//     where: {
//       first_name: {
//         $like: req.body.search
//       }
//     },
//     offset: first_name,
//     limit: 3
//   })
//   .then(function(res){
//     res.render('search', {data: res, title: 'Search'})
//   })
// })

routers.get('/add', function(req, res){
  res.render('patientAdd', {title: 'Add Patient'})
})

routers.post('/add', function(req, res){
  models.Patient.build({
    first_name: req.body.fn,
    last_name: req.body.ln,
    createdAt: new Date()
  })
  .save().then(function(patient){
    res.redirect('/patient')
  })
})

routers.get('/edit/:id', function(req, res){
  models.Patient.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function(patient){
    res.render('patientEdit', {data: patient, title: 'Edit Patient'})
  })
})

routers.post('/edit/:id', function(req, res){
  models.Patient.update({
    first_name: req.body.fn,
    last_name: req.body.ln,
    updatedAt: new Date()
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(patient){
    res.redirect('/patient')
  })
})

routers.get('/delete/:id', function(req, res){
  models.Patient.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(patient){
    res.redirect('/patient')
  })
})

module.exports = routers
