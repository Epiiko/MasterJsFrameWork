import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LastArticles from "./components/LastArticles.vue";
import MiComponente from "./components/MiComponente.vue";
import Blog from "./components/Blog.vue";
import Article from "./components/Article.vue";
import Formulario from "./components/Formulario.vue";
import Pagina from "./components/Pagina.vue";
import Error from "./components/Error.vue";
import Peliculas from "./components/Peliculas.vue"
import Search from "./components/Search.vue"
import CreateArticle from "./components/CreateArticle.vue"

const routes =[
    {path: '/home', component: LastArticles},
    {path: '/mi-componente', component: MiComponente},
    {path: '/crear-articulo', name: "crear", component: CreateArticle},
    {path: '/ultimos-articulos', component: LastArticles},
    {path: '/blog', component: Blog},
    {path: '/articulo/:id',name: "article", component: Article},
    {path: '/buscador/:searchString', component: Search},
    {path: '/formulario', component: Formulario},
    {path: '/pagina/:id?', name:"pagina" ,component: Pagina},
    {path: '/peliculas', name:"peliculas" ,component: Peliculas},
    {path: '/', component: LastArticles},
    {path: '/:pathmatch(.*)', component: Error},
];

// const routes = {
//   "/home": LastArticles,
//   "/mi-componente": MiComponente,
//   "/ultimos-articulos": LastArticles,
//   "/": LastArticles,
// };

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");