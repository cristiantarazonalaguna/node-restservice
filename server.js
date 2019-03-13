
const mongoose = require('mongoose');
const port=require('./server/config/config');
const urlDB = require('./server/config/config')
app=require('./server/routes/usuario');
mongoose.connect(process.env.URLDB,{useNewUrlParser:true, useCreateIndex: true},(err,res)=>{
    if(err) throw err;
    console.log('Base de datos ONLINE');
})
app.listen(port,()=>{
  console.log(`Escuchando en el puerto ${port}`)
})