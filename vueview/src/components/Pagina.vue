<template>
  <SliderComponent titulo="Pagina de pruebas" showBtn="false"></SliderComponent>
  <div class="class">
    <section id="content">
      <h2 class="subheader">{{ titulo }}</h2>
      <h3>{{ id_desde_url }}</h3>
      <p>Blog realizado por {{ nombre }}</p>
      <button @click="actualizarNombre()">Actualiza nombre</button>
      <button @click="redirigirBlog()">Redirigir al blog</button>
    </section>
  </div>
  <SidebarComponent></SidebarComponent>
</template>

<script>
import SidebarComponent from './Sidebar.vue';
import SliderComponent from './Slider.vue';

export default {
  name: "PaginaComponent",
  components:{
    SliderComponent,
    SidebarComponent
  },
  mounted() {
    this.id_desde_url = this.$route.params.id
    console.log("COMPONENTE MONTADO")
  },
  created() {
    console.log("COMPONENTE CREADO")

  },
  updated() {
    console.log("COMPONENTE ACTUALIZADO")
  },
  unmounted() {
    console.log("COMPONENTE ELIMINADO")
  },
  data() {
    return {
      id_desde_url: null,
      titulo: "Pagina de prueba",
      nombre: "Nacho Diaz",
    }
  },
  methods: {
    actualizarNombre() {
      this.nombre = "EpikoDev"
    },
    redirigirBlog() {
      this.$router.push("/blog")
    }
  }
};
</script>