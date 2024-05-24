<template>
  <SliderComponent showBtn="true" titulo="Bienvenido al Master de Vue"></SliderComponent>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Últimos artículos</h2>

      <div id="articles">
        <!-- listado articulos -->
      <ArticlesComponent :articles="articles"></ArticlesComponent>
        <!-- añadir + articulos con js -->
      </div>
    </section>
  </div>
    <SidebarComponent></SidebarComponent>
</template>

<script>
import { Global } from '../Global.js';
import ArticlesComponent from './Articles.vue';
import SidebarComponent from './Sidebar.vue';
import SliderComponent from './Slider.vue';
import axios from 'axios';

export default {
  name: "LastArticlesComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },
  mounted(){
   this.getArticles() 
  },
  data(){
    return{
      articles: [],
      url: Global.url
    }
  },
  methods: {
    async getArticles() {
      await axios.get(this.url + "articles/5")
        .then(res => {
          if (res.data.status == "Goood")
            this.articles = res.data.articles

        })
        .catch(
          err => {
            console.log("Error en la conex con la api " + err);
          }
        )
    }
  },
};
</script>
