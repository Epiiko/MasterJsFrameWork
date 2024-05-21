'use strict'
let express= require("express");
const ArticleController = require("../controllers/article");

var router = express.Router();
//RUTAS DE PRUEBA
router.get('/test', ArticleController.test);
router.post('/datosCurso', ArticleController.datosCurso)
var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './assets/upload/articles'});
//RUTAS UTILES
router.post('/save', ArticleController.save)
router.get('/articles', ArticleController.getArticles);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.get('/search/:search', ArticleController.search);
router.put('/update/:id', ArticleController.update);
router.delete('/delete/:id', ArticleController.delete);
router.get('/get-image/:image', ArticleController.getImage);
router.post('/upload-image/:id?', md_upload, ArticleController.upload);
module.exports= router;