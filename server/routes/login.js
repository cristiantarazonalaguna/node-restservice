const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../modelos/usuario');
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const urlencodedParser = bodyParser.urlencoded({extended:false});
app.post('/login',urlencodedParser,(req,res)=>{
    let body = req.body;
    
    Usuario.findOne({email:body.email},(err,usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                err:{
                    message:'(Usuario) o contraseña incorrectos'
                }
            })
        }

       if(!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok:false,
                err:{
                    message:'Usuario o (contraseña) incorrecto'
                }
            })
       }
       let token = jwt.sign({
           usuario: usuarioDB
       },process.env.SEED,{expiresIn:process.env.CADUCIDAD_TOKEN})
       res.status(200).json({
           ok:true,
           usuario: usuarioDB,
           token: token,

       })
    })
})

module.exports = app;