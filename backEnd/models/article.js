'use strict'
let mongoose=require("mongoose");
let schema= mongoose.Schema;

let ArticleSchema= schema ({
    title: String,
    content: String,
    date: {type:Date, default:Date.now},
    image: String
})
//primer parametro -> nombre del modelo a crear (Singulariza y minuscula), segundo -> modelo a guardar
module.exports=mongoose.model('Article', ArticleSchema);
