const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//Connect to database

mongoose.connect('mongodb://localhost:27017/usuariosdb');
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
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //mensajes sencillos
app.use(express.json());

//API dominio/api/routes
app.use('/api', require('./routes/rt'));

//Execute server
app.listen(app.get('port'), ()=>{
    console.log('El servidor está listo');
});
