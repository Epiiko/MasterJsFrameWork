<template>
  <section id="content">
    <h1 class="subheader">{{ titulo }}</h1>
    <hr />
    <div id="mi-componente">
      <h1>Mi componente :D</h1>
      <h2>{{ subtitulo }}</h2>
      <hr />
      <h2>Reactividad</h2>
      <input type="text" name="" id="" v-model="nombre">
      <p v-if="nombre">Mi nombre es: <strong>{{ nombre }}</strong></p>
      <p v-else>Para ver el contenido escriba algo</p>
      <h2>Directiva iterativa</h2>
      <ul >
        <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula.titulo }}</li>
        <!-- <li v-for="pelicula in peliculas" :key="pelicula"><img :src="pelicula.image" alt=""></li> -->
      </ul>
      <!-- <pre>{{ $data }}</pre> -->
    </div>
  </section>
</template>
<script>

export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi compo",
      titulo: "Bienvenido a mi componente",
      nombre: "",
      peliculas: [
        {
          titulo: "Batman Vs Superman",
          image:
            "https://images.ecestaticos.com/iPpZiNZ7UdxSu__vCjyamtKdk6E=/2x0:1279x718/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F578%2F59e%2F1c3%2F57859e1c30d7f9871400ceb3512cb9e7.jpg",
        },
        {
          titulo: "Harry Potter",
          image:
            "https://www.fanisetas.com/blog/storage/2019/02/maxresdefault.jpg",
        },
        {
          titulo: "Matrix",
          image:
            "https://estaticos-cdn.prensaiberica.es/clip/3678c50c-e36a-4ce1-a8ea-bf7e6d655093_16-9-discover-aspect-ratio_default_0.jpg",
        },
      ],
    };
  },
};
</script>
<style></style>