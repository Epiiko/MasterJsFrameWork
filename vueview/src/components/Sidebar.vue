<template>
  <aside id="sidebar">
    <div id="navblog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <router-link to="/crear-articulo" class="btn btn-success">Crear articulo</router-link>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el articulo</p>
      <form action="" @submit.prevent="search">
        <input type="text" name="search" id="" v-model="searchString"/>
        <input type="submit" value="Buscar" name="submit" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
  data(){
    return{
      searchString: ""
    }
  },
  methods:{
    search(){
      console.log(this.searchString);
      this.$router.push("/buscador/"+ this.searchString)
    }
  }
};
</script>