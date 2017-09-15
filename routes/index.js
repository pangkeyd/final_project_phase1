const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  res.render('index', {title: 'Welcome'})
})

module.exports = routers
