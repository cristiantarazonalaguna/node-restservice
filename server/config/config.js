
//===============
//Puerto
//===============

const port = process.env.PORT || 3000;

//================
// Entorno
//================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


//==================
//Base de datos
//==================

let urlDB;
/*if(process.env.NODE_ENV == 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{*/
    urlDB = 'mongodb+srv://strider:RikK02qLOdByOTBC@cluster0-cwati.mongodb.net/cafe'
//}

process.env.URLDB = urlDB;

module.exports={
    port,
    urlDB
}