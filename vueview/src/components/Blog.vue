<template>

  <SliderComponent titulo="Blog"></SliderComponent>
  <div class="center">
    <section id="content">
      <h2 class="subheader">{{ titulo }}</h2>
      <ArticlesComponent :articles="articles"></ArticlesComponent>
    </section>
  </div>
  <SidebarComponent></SidebarComponent>
</template>

<script>
import axios from 'axios'
import {Global} from '../Global.js'
import SidebarComponent from './Sidebar.vue';
import SliderComponent from './Slider.vue';
import ArticlesComponent from './Articles.vue';

export default {
  name: "BlogComponent",
  components: {
    SidebarComponent,
    SliderComponent,
    ArticlesComponent,
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      await axios.get(this.url + "articles")
        .then(res => {
          if (res.data.status == "Goood")
            this.articles = res.data.articles
          console.log(this.articles);

        })
        .catch(
          err => {
            console.log("Error en la conex con la api " + err);
          }
        )
    }
  },
  data() {
    return {
      titulo: "Blog",
      url:Global.url,
      articles: []
    }
  }
};
</script>