"use strict";
const validator = require("validator");
const Article = require("../models/article");
const { param, search } = require("../app");
var fs = require("fs");
var path = require("path");
const { log } = require("console");
const controller = {
  datosCurso: (req, res) => {
    return res.status(200).send({
      curso: "Master en frameworks Js",
      autor: "Nachete Diaz",
      url: "Epikoweb.com",
    });
  },
  test: (req, res) => {
    return res.status(200).send({
      message: "Soy la acción test del controlador",
    });
  },
  save: async function (req, res) {
    try {
      // Recoger los parámetros por POST
      const params = req.body;
      console.log(params);

      // Validar datos
      const validate_title = !validator.isEmpty(params.title);
      const validate_content = !validator.isEmpty(params.content);

      if (validate_content && validate_title) {
        // Crear objeto a guardar
        const article = new Article();

        // Asignar valores
        article.title = params.title;
        article.content = params.content;
        article.image = null;

        // Guardar artículo
        const articleStored = await article.save();

        if (!articleStored) {
          return res.status(404).send({
            status: "Error",
            message: "El artículo no se ha guardado.",
          });
        }
        // Devolver respuesta
        return res.status(200).send({
          status: "success",
          message: "Validación correcta",
          article: articleStored,
        });
      } else {
        return res.status(400).send({
          status: "Error",
          message: "Datos inválidos",
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "Error al guardar el artículo.",
      });
    }
  },
  upload: (req, res) => {
    // Configurar el modulo connect multiparty router/article.js (hecho)

    // Recoger el fichero de la petición
    var file_name = "Imagen no subida...";

    if (!req.files) {
      return res.status(404).send({
        status: "error",
        message: file_name,
      });
    }

    // Conseguir nombre y la extensión del archivo
    var file_path = req.files.file0.path;
    var file_split = file_path.split("\\");

    // * ADVERTENCIA * EN LINUX O MAC
    // var file_split = file_path.split('/');

    // Nombre del archivo
    var file_name = file_split[2];

    // Extensión del fichero
    var extension_split = file_name.split(".");
    var file_ext = extension_split[1];

    // Comprobar la extension, solo imagenes, si es valida borrar el fichero
    if (
      file_ext != "png" &&
      file_ext != "jpg" &&
      file_ext != "jpeg" &&
      file_ext != "gif"
    ) {
      // borrar el archivo subido
      fs.unlink(file_path, (err) => {
        return res.status(200).send({
          status: "error",
          message: "La extensión de la imagen no es válida !!!",
        });
      });
    } else {
      // Si todo es valido, sacando id de la url
      var articleId = req.params.id;

      if (articleId) {
        // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
        Article.findOneAndUpdate(
          { _id: articleId },
          { image: file_name },
          { new: true },
          (err, articleUpdated) => {
            if (err || !articleUpdated) {
              return res.status(200).send({
                status: "error",
                message: "Error al guardar la imagen de articulo !!!",
              });
            }

            return res.status(200).send({
              status: "success",
              article: articleUpdated,
            });
          }
        );
      } else {
        return res.status(200).send({
          status: "success",
          image: file_name,
        });
      }
    }
  }, // end upload file
  getImage: (req, res) => {
    var file = req.params.image;
    var path_file = "./assets/upload/articles/" + file;

    fs.exists(path_file, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(404).send({
          status: "error",
          message: "La imagen no existe !!!",
        });
      }
    });
  },
  getArticles: async function (req, res) {
    let query = Article.find({});
    let last = req.params.last;
    console.log(last);
    if (last || last != undefined) {
      query.limit(last);
    }
    try {
      const articles = await query.sort("-_id");
      res.status(200).send({
        status: "Goood",
        articles,
      });
    } catch (err) {
      res.status(400).send({
        status: "Error",
        message: "ALGO NO FUNCIONA",
      });
    }
  },
  getArticle: async function (req, res) {
    const id = req.params.id;
    try {
      const articuloSearched = await Article.find({ _id: id });
      if (articuloSearched) {
        res.status(200).send({
          status: "Goood",
          articuloSearched,
        });
      } else {
        res.status(404).send({
          status: "Error",
          msg: "Not found",
        });
      }
    } catch {
      res.status(400).send({
        status: "Error",
        msg: "No se pudo acceder",
      });
    }
  },
  update: async function (req, res) {
    try {
      const id = req.params.id;
      const params = req.body;
      const validate_title = !validator.isEmpty(params.title);
      const validate_content = !validator.isEmpty(params.content);

      if (validate_content && validate_title) {
        const articulo = await Article.findOneAndUpdate({ _id: id }, params, {
          new: true,
        });

        if (articulo) {
          res.status(200).send({
            status: "Success",
            articulo,
          });
        } else {
          res.status(404).send({
            status: "Error",
            msg: "Error sin manejar",
          });
        }
      } else {
        res.status(400).send({
          status: "Error",
          msg: "Datos incompletos",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "Error",
        msg: "Problemas al encontrar o actualizar el artículo",
      });
    }
  },
  delete: async function (req, res) {
    let id = req.params.id;
    console.log(id);
    try {
      let articuloBorrado = await Article.findOneAndDelete({ _id: id }, '',{new:true});
      console.log(articuloBorrado);
      if (articuloBorrado) {
        res.status(200).send({
          status: "Success",
          msg: "Articulo borrado con exito",
          articcle: articuloBorrado,
        });
      } else {
        res.status(400).send({
          status: "Error",
          msg: "Problemas 1 al encontrar o actualizar el artículo",
        });
      }
    } catch (error) {
      res.status(400).send({
        status: "Error",
        msg: "Problemas al encontrar o actualizar el artículo",
      });
    }
  },
  search: async function (req, res) {
    try {
      // Sacar el string a buscar
      var searchString = req.params.search;

      // Find or
      Article.find({
        $or: [
          { title: { $regex: searchString, $options: "i" } },
          { content: { $regex: searchString, $options: "i" } },
        ],
      })
        .sort([["date", "descending"]])
        .then(function (articles) {
          if (!articles || articles.length <= 0) {
            return res.status(404).send({
              status: "error",
              message: "No hay articulos que coincidan con tu busqueda !!!",
            });
          }

          return res.status(200).send({
            status: "success",
            articles,
          });
        })
        .catch(function (err) {
          console.log("ERROR eres tonto");
          return res.status(500).send({
            status: "error",
            message: "Error en la petición !!!",
          });
        });
    } catch {
      console.log("Hay problemas");
    }
  },
};

module.exports = controller;
