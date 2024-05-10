'use strict'
let app=require("./app")
let mongoose= require("mongoose");
let port = 3900;


mongoose.Promise=global.Promise; //para uso de promesas con mongodb
// mongoose.set('useFindAndModify', false) //desactiva las antiguas funciones
mongoose.connect('mongodb://localhost:27017/api_rest_blog')
    .then(()=>{
        console.log("LA CONEXION ES OK");
        app.listen(port, ()=>{
            console.log("Servidor corriendo en http://localhost:3900");
        })
})
