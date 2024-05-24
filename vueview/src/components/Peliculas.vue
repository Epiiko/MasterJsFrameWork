<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>
        <div class="misDatos" v-if="misDatos">
          <p v-html="misDatos"></p>
        </div>
        <div v-if="favorita">
          <h1>Pelicula Favorita</h1>
          <h3>{{ favorita.titulo }}</h3>
          <h3>{{ favorita.year }}</h3>
          <hr/>
        </div>
        <div id="articles">
          <!-- v-for="pelicula in peliculas" v-bind:key="pelicula" -->
          <div v-for="pelicula in peliculas" v-bind:key="pelicula.titulo">
            <Pelicula :pelicula="pelicula" @favorita="recibirPelicula"></Pelicula>
          </div>
          <!-- añadir + articulos con js -->
        </div>
      </section>
    </div>
    <SidebarComponent></SidebarComponent>
  </div>
</template>

<script>
import Pelicula from './Pelicula.vue';
import SidebarComponent from './Sidebar.vue';
export default {
  name: "PeliculasComponent",
  components: {
    Pelicula,
    SidebarComponent
  },
  methods: {
    recibirPelicula(favorita) {
      this.favorita = favorita
      console.log(favorita);
    }
  },
  computed:{
    peliculasMayusc(){
      this.peliculas.forEach((pelicula)=>{
        pelicula.titulo=pelicula.titulo.toLocaleUpperCase();
      })
      return this.peliculas;
    },
    misDatos(){
      return this.nombre + ' ' + this.apellidos + "</br>Sitio web: " + this.web
    }
  },
  data() {
    return {
      favorita: null,
      nombre: "Epiko",
      apellidos: "Lasso Dev",
      web: "www.epikodev.com",
      peliculas: [
        {
          titulo: "Batman Vs Superman",
          image:
            "https://images.ecestaticos.com/iPpZiNZ7UdxSu__vCjyamtKdk6E=/2x0:1279x718/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F578%2F59e%2F1c3%2F57859e1c30d7f9871400ceb3512cb9e7.jpg",
          year: 2012
        },
        {
          titulo: "Harry Potter",
          image:
            "https://www.fanisetas.com/blog/storage/2019/02/maxresdefault.jpg",
          year: 2018
        },
        {
          titulo: "Matrix",
          image:
            "https://estaticos-cdn.prensaiberica.es/clip/3678c50c-e36a-4ce1-a8ea-bf7e6d655093_16-9-discover-aspect-ratio_default_0.jpg",
          year: 2008
        },
      ],
    };
  },
};
</script>