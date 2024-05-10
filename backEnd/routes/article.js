'use strict'
let express= require("express");
const ArticleController = require("../controllers/article");

var router = express.Router();
//RUTAS DE PRUEBA
router.get('/test', ArticleController.test);
router.post('/datosCurso', ArticleController.datosCurso)

//RUTAS UTILES
router.post('/save', ArticleController.save)
router.get('/articles', ArticleController.getArticles);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/update/:id', ArticleController.update);
router.delete('/delete/:id', ArticleController.delete);

module.exports= router;