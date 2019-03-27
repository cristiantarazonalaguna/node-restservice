
//===============
//Puerto
//===============

const port = process.env.PORT || 3000;

//================
// Entorno
//================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//================
// Vencimiento de token
// 60 segundo
// 60 minutos
// 24 horas
// 30 dias
//================


process.env.CADUCIDAD_TOKEN = 60*60*24*30;

//==================
//Google Client ID
//==================

process.env.CLIENT_ID = process.env.CLIENT_ID || '1076505276122-ijlklods8io8uq077l688fbga720sv0m.apps.googleusercontent.com'

//==================
//SEED de autenticación
//==================

process.env.SEED = process.env.SEED ||'Este-es-el-seed-produccion';

let urlDB;
if(process.env.NODE_ENV == 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB;

module.exports={
    port,
    urlDB
}

