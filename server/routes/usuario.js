
const express = require('express');
const app = express();
const Usuario = require('../modelos/usuario');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const _ = require('underscore');
app.get('/usuario',function(req,res){
   let desde = req.query.desde || 0 ;
   let limite = req.query.limite || 5;
   desde = Number(desde);
   limite = Number(limite);
   //se puede filtrar las busquedas de esta manera
    //  Usuario.find({google:false})
    Usuario.find({estado:true},'nombre email rol estado google img')
           .skip(desde)
           .limit(limite)
           .exec((err,usuarios)=>{
               if(err){
                   return res.status(400).send({
                       ok:false,
                       err
                   })
               }
               //se puede filtrar las busquedas de esta manera
               //Usuario.count({google:false},(err,conteo)=>{
               Usuario.count({estado:true},(err,conteo)=>{
                    res.json({
                        ok:true,
                        usuarios,
                        cuantos:conteo
                    })
               })
               

           })

})
const urlencodedParser = bodyParser.urlencoded({extended:false});
app.post('/usuario',urlencodedParser,(req,res)=>{
    let usuario = new Usuario({
        nombre:req.body.nombre,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10),
        role:req.body.role,
    })

    usuario.save((err,usuarioDB)=>{
        if(err){
           return res.status(400).json({
                ok:false,
                err
            })
        }
        //usuarioDB.password=null;
        res.send({
            ok:true,
            usuario:usuarioDB
        })
    })
    //if(!req.body) return res.send(400);
    //res.status(200).send(req.body);
})

app.put('/usuario/:id',urlencodedParser,(req,res)=>{
    let id = req.params.id;
    let body = _.pick(req.body,['nombre','email','img','role','estado']);


    Usuario.findByIdAndUpdate(id,body,{new:true, runValidators:true},(err,usuarioDB)=>{
            if(err){
                return res.status(400).json({
                    ok:false,
                    err
                })
            }
            res.send({
                ok:true,
                usuario:usuarioDB
            })   
    })
    
})

app.delete('/usuario/:id',urlencodedParser,(req,res)=>{

    let id = req.params.id;
    req.body.estado = false;
    let cambia={
        estado:false
    }
    Usuario.findByIdAndUpdate(id,cambia,{new:true},(err,usuarioBorrado)=>{

        if(err){
            return res.status(400).send({
                ok:false,
                err
            })
        }
        if(!usuarioBorrado){
            return res.status(400).send({
                ok:false,
                error:{
                    message:'Usuario no encontrado'
                }
            })
        }

         res.status(200).send({
            ok:true,
            usuarioBorrado
        })

    })
    
})

module.exports=app