<template>
    <SliderComponent titulo="Blog"></SliderComponent>
    <div class="center">
        <section id="content">
            <h2 class="subheader">{{ titulo }}</h2>
            <article class="article-item article-item-detail">
                <div class="img-wrap">
                    <img src="https://i.blogs.es/20f1ba/jumpstory-download20220511-143520/650_1200.jpg" alt="Paisaje" />
                </div>
                <h1 class="subheader">Prueba</h1>
                <span class="date">Hace 5 min</span>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit error quod sapiente
                    molestiae autem aliquam rerum fugiat nesciunt nulla, vitae cum facilis praesentium aperiam,
                    laudantium mollitia quia hic labore.
                    Error, molestias molestiae tenetur voluptate eos labore. Aspernatur, in voluptate maxime enim ipsa
                    impedit maiores facilis repudiandae, beatae eveniet ab temporibus ad veritatis nisi consequuntur rem
                    cupiditate eum. Sint, atque?
                    Praesentium dolor recusandae impedit sit alias magni quae, explicabo quia ratione voluptatibus
                    suscipit omnis quibusdam aliquid, cupiditate ad quaerat iste esse, totam laboriosam aperiam veniam
                    fugit. Aliquid vel cupiditate perspiciatis.
                    Iusto, voluptatibus incidunt minus recusandae modi ratione qui eveniet error? Magni corrupti modi
                    aspernatur neque ex consequatur quis asperiores illum. Sunt ipsa mollitia repudiandae laboriosam
                    consequatur earum, modi est illum?
                    Libero delectus rerum hic, quis sint repellendus asperiores. Molestiae saepe, aspernatur sit totam
                    officia optio odio, iure ratione excepturi hic iste suscipit magni dolor asperiores unde eaque
                    dolore exercitationem provident.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ut cumque a distinctio eius
                    quasi, suscipit obcaecati at accusantium ipsa non pariatur praesentium quibusdam. Aliquid vel
                    suscipit quisquam pariatur omnis!
                    Quos quod eligendi ipsam ipsum fugiat illo mollitia dolore, quisquam ullam sint debitis voluptatem
                    quis voluptates quibusdam cumque, ea sunt nemo. Incidunt eligendi laudantium laboriosam obcaecati
                    consectetur asperiores magni distinctio!
                </p>
                <div class="clearfix"></div>
            </article>
        </section>
    </div>
    <SidebarComponent></SidebarComponent>
</template>

<script>

import {Global} from '../Global.js'
import SidebarComponent from './Sidebar.vue';
import SliderComponent from './Slider.vue';
import axios from 'axios';
export default{
    name: "ArticleComponent",
    components:{
        SidebarComponent,
        SliderComponent,
    },
    data(){
        return{
            url: Global.url,
            article: null,
        }
    },
    mounted(){
        console.log(this.$route.params.id);
        this.getArticle(this.$route.params.id);
    },
    methods:{
       async getArticle(articleId){
            console.log(this.url + "article/" + articleId);
            await axios.get(this.url + "article/" + articleId)
            .then(res=>{
                console.log(res);
                this.article= res.data.articuloSearched[0];
                console.log(this.article);
            })
        }
    }
}

</script>