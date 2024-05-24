<template>
  <div class="articles-list" v-if="articles && articles.length>=1">
    <article class="article-item" v-for="article in articles" v-bind:key="article._id">
      <div class="img-wrap">
        <img :src="this.url + 'get-image/' + article.image" alt="Paisaje" />
      </div>
      <router-link :to="{name: 'article', params:{id: article._id}}">
        <h2>{{ article.title }}</h2>
      </router-link>
      <span class="date">{{ article.date }}</span>
      <a href="">Leer más</a>
      <div class="clearfix"></div>
    </article>
  </div>
  <div v-else> CARGANDO .....</div>
</template>

<script>
import {Global} from '../Global.js'
export default{
  name: "ArticlesComponent",
  props:["articles"],
  data() {
    return {
      url:Global.url,
    }
  }
};

</script>