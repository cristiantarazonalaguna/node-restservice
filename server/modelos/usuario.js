const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message:'{VALUE} no es un rol valido'
}
let usuarioSchema = new Schema({
    nombre:{
        type:String,
        require: [true,'El nombre es necesario']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'El correo es necesario'],
        
    },

    password:{
       type: String,
       required: [true,'La contraseña es obligatoria'] 
    },
    img:{
        type:String,
        required:false
    },
   
    estado:{
        type:Boolean,
        default:true,
        required:[true,'El estado es obligatorio']

    },
    role:{
        type:String,
        default:'USER_ROLE',
        enum:rolesValidos

    },
    google:{
        type: Boolean,
        default:false
    }
    
});
//####################################################################
//Esta parte es para eliminar el atributo password del objeto solo para que cuando me responda no me muestre el password, ya que si se registra en la base de datos

usuarioSchema.methods.toJSON = function(){
    let user = this;//recordar que el this no se usa con funcion flecha
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}
//#####################################################################
usuarioSchema.plugin(uniqueValidator,{message:'{PATH} debe de ser unico'});
module.exports = mongoose.model('Usuario',usuarioSchema);

