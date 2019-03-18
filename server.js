
const mongoose = require('mongoose');
const port=require('./server/config/config');
const urlDB = require('./server/config/config')

//Configuracion global de rutas
app = require('./server/routes/index')

mongoose.connect(process.env.URLDB,{useNewUrlParser:true, useCreateIndex: true},(err,res)=>{
    if(err) throw err;
    console.log('Base de datos ONLINE');
})
app.listen(port,()=>{
  console.log(`Escuchando en el puerto ${port}`)
})