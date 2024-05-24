<template>
    <SliderComponent :titulo="'Buscador' + this.searchString"></SliderComponent>
    <div class="center">
        <section id="content">
            <h2 class="subheader">{{ titulo }}</h2>
            <div id="articles" v-if="articles.length>=1">
                <ArticlesComponent :articles="articles"></ArticlesComponent>
            </div>
            <div v-else>
                No se han encontrado articulos
            </div>
        </section>
    </div>
    <SidebarComponent></SidebarComponent>
</template>

<script>
import axios from 'axios'
import { Global } from '../Global.js'
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
    params: ["searchString"],
    mounted() {
        let searchString = this.$route.params.searchString; 
        this.getArticlesBySearch(searchString);
    },
    methods: {
        async getArticlesBySearch(searchString) {
            console.log(this.url + "search/" + searchString);
            await axios.get(this.url + "search/" + searchString)
                .then(res => {
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
            titulo: "Articulos encontrado",
            url: Global.url,
            articles: [],
            searchString: "",
        }
    }
};
</script>