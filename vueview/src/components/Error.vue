<template>
<section id="content">
    <h1  class="subheader">Error al encontrar la pagina 404</h1>
    <h2>{{msg}}</h2>
  </section>
</template>

<script>
export default {
  name: "ErrorComponent",
  data(){
    return{
      msg: "Error 404. Página no encontrada"
    }
  }
}
</script>