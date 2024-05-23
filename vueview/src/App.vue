<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <div class="center">
      <!-- <LastArticlesComponent></LastArticlesComponent> -->
      <router-view></router-view>
      <SidebarComponent></SidebarComponent>
    </div>
    <div class="clearfix"></div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MiComponente from './components/MiComponente.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SliderComponent from './components/Slider.vue'
import SidebarComponent from './components/Sidebar.vue'
// import LastArticlesComponent from './components/LastArticles.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MiComponente,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    // LastArticlesComponent,
    FooterComponent
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import './assets/css/style.css';
</style>
