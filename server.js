
const mongoose = require('mongoose');
const port=require('./server/config/config');
const urlDB = require('./server/config/config')
const express = require('express');
const app = express();
const path = require('path');

//Configuracion global de rutas
app.use(require('./server/routes/index'))
app.use(express.static(path.resolve(__dirname ,'./public')))

console.log(path.resolve(__dirname ,'/public'))
mongoose.connect(process.env.URLDB,{useNewUrlParser:true, useCreateIndex: true},(err,res)=>{
    if(err) throw err;
    console.log('Base de datos ONLINE');
})
app.listen(port,()=>{
  console.log(`Escuchando en el puerto ${port}`)
})