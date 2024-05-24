<template src="./CreateArticle.html"></template>
<script>
import SliderComponent from './Slider.vue'
import Article from '../models/Article';
import axios from 'axios';
import { Global } from '../Global.js';
import swal from 'sweetalert';

export default {
    name: "CreateArticleComponent",
    components: {
        SliderComponent,
    },
    mounted(){
    },
    data() {
        return {
            titulo: "Creacion de articulo",
            url: Global.url,
            article: {
                title: "",
                date: "",
                image: '',
                genero: '',
                content: '',
            },
            articleModelado: new Article("", "",Date.now(),"")
        }
    },
    methods:{
        save(){
            console.log(this.article);
            axios.post(this.url + "save", this.article).then(res=>{
                console.log(res);
                swal(
            "Articulo creado",
            "El articulo se ha creado correctamente",
            "success"
            );
                this.$router.push("/blog")
            }).catch(err=>{
                console.log(err)
                swal(
            "Articulo no se ha creado",
            "El articulo se ha creado correctamente por alguna razon",
            "error"
            );
            })
        }
    }
}
</script>