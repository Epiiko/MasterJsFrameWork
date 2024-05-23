<template>
  <section id="content">
    <h2 class="subheader">Últimos artículos</h2>

    <div id="articles">
      <!-- listado articulos -->
      <article class="article-item" id="article-template">
        <div class="img-wrap">
          <img
            src="https://i.blogs.es/20f1ba/jumpstory-download20220511-143520/650_1200.jpg"
            alt="Paisaje"
          />
        </div>
        <h2>Articulo de prueba</h2>
        <span class="date">Hace 5 min</span>
        <a href="">Leer más</a>
        <div class="clearfix"></div>
      </article>
      <!-- añadir + articulos con js -->
    </div>
  </section>
</template>

<script>
export default {
  name: "LastArticlesComponent",
};
</script>
