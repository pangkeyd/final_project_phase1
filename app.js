const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const index = require('./routes/index')
const patient = require('./routes/patient')
const polyclinic = require('./routes/polyclinic')
const registration = require('./routes/registration')

app.use('/', index)
app.use('/patient', patient)
app.use('/polyclinic', polyclinic)
app.use('/registration', registration)

app.listen(3005, function(){
  console.log(`AYO JALAN!`);
})
