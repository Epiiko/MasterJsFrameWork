<template>
  <SliderComponent></SliderComponent>
  <div class="center">
    <section id="content">
      <h1 class="subheader">Error al encontrar la pagina 404</h1>
      <h2>{{ msg }}</h2>
    </section>
  </div>
  <SidebarComponent></SidebarComponent>
</template>

<script>
import SidebarComponent from './Sidebar.vue';
import SliderComponent from './Slider.vue';

export default {
  name: "ErrorComponent",
  components: {
    SidebarComponent,
    SliderComponent
  },
  data() {
    return {
      msg: "Error 404. Página no encontrada"
    }
  }
}
</script>