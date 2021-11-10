const {Router, response} = require('express');
const router = Router();
const Usuarios = require('../models/Usuarios');

//GET
router.get('/getUsuarios', (req,res)=>{
    Usuarios.find()
    .then((doc)=>{
        res.json(doc);
    });
    
});

// POST
router.post('/addUsuarios', (req,res)=>{
    try{
        Usuarios.insertMany([{nombre : req.body.nombre, id : req.body.id, contraseña: req.body.contraseña}],
        (err)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Los datos fueron añadidos correctamente");
            }
        });

    } catch(err){
        console.log(err);
    }

    

});

//PUT = UPDATE

router.put('/updateUsuarios/:key',(req,res)=>{
    const {key} = req.params;

    Usuarios.findOneAndUpdate({id : key}, 
    {
        nombre : req.body.nombre,
        id : key,
        contraseña : req.body.contraseña
    },(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send('Los datos fueron actualizados correctamente');
        }

    });
});

//DELETE 
router.delete('/deleteUsuarios/:key',(req,res)=>{
    const {key} = req.params;

    Usuarios.findOneAndDelete({id : key},
        (err,doc)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Los datos fueron eliminados correctamente");
            }
        });
});

module.exports = router;