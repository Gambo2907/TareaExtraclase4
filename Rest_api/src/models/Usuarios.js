const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const EsquemaUsuarios = new esquema(
    {
        nombre:{
            type: String
        },
        id:{
            type: Number
        },
        contraseña:{
            type: String
        }

    }
)

const Usuarios = mongoose.model('',EsquemaUsuarios);

module.exports = esquema;