"use strict";
const validator = require("validator");
const Article = require("../models/article");
const { param } = require("../app");

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
      let articuloBorrado = await Article.findOneAndDelete({ _id: id });
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
};

module.exports = controller;
