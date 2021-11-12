const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

//Connect to database

mongoose.connect('mongodb+srv://1234:1234@tarea4.vzp0s.mongodb.net/usuariosdb?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error',(err)=>{
    if(err){
        console.log(err);
    }
});

db.once('open',()=>{
    console.log('Mongo DB ready to use');

});

//Execute express server
const app = express();

//config
app.set('port', 3000);
app.set('json spaces', 2);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //mensajes sencillos
app.use(express.json());

//API dominio/api/routes
app.use('/api', require('./routes/rt'));

//Execute server
app.listen(app.get('port'), ()=>{
    console.log('El servidor está listo');
});
