'use strict'

//Cargar modulos de node para crear el servidor
let express=require("express");
let bodyParser=require("body-parser");

//EJecutar express
let app=express();

//Cargar ficheros rutas
let article_routes = require('./routes/article')


//Middlewares
app.use(bodyParser.urlencoded({extended: false}));//carga el bodyParser 
app.use(bodyParser.json());
//cors


//Añadir prefijos para las rutas
app.use('/api',article_routes);


//Exportar modulo (fichero actual)
module.exports=app;