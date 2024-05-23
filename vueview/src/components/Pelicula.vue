<template>
    <article class="article-item" id="article-template">
        <div class="img-wrap">
            <img :src="pelicula.image" :alt="pelicula.titulo" />
        </div>
        <h2>{{ pelicula.titulo }}</h2>
        <span class="date" v-bind:class="{
            yeargreen: pelicula.year > 2017,
            yearred: pelicula.year <= 2017
        }">
            {{ pelicula.year }}
        </span>
        <a href="">Leer más</a>
        <div class="clearfix"></div>
    </article>
</template>

<script>
export default {
    name: "PeliculaComponent",
    props: ['pelicula'],
}
</script>