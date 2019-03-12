const express = require('express');
const app = express();
const port=require('./server/config/config');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();


app.get('/usuario',function(req,res){

    res.send({
        message:'Get usuarios'
    })

})
const urlencodedParser = bodyParser.urlencoded({extended:false});
app.post('/usuario',urlencodedParser,(req,res)=>{
    if(!req.body) return res.send(400);
    res.status(200).send(req.body);
})

app.put('/usuario/:id',(req,res)=>{
    let id = req.params.id;
    res.json(`put usuario ${id}`)
})

app.delete('/usuario',(req,res)=>{
    res.json('delete usuario')
})

app.listen(port,()=>{
  console.log(`Escuchando en el puerto ${port}`)
})