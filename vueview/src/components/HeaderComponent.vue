<template>
  <header id="header">
    <div class="center">
      <!-- Logo -->
      <div id="logo">
        <img
          src="../assets/logo.png"
          alt="logotipo"
          class="app-logo"
        />
        <span id="brand"> <strong>Curso</strong>Vue </span>
      </div>
      <!-- Menu -->
      <nav id="menu">
        <ul>
          <li><router-link to="home" activeClass="active">Inicio</router-link></li>
          <li><router-link to="blog" activeClass="active">Blog</router-link></li>
          <li><router-link to="formulario" activeClass="active">Formulario</router-link></li>
          <li><router-link to="pagina" activeClass="active">Pagina 1</router-link></li>
          <li><router-link to="peliculas" activeClass="active">Ejemplo</router-link></li>
        </ul>
      </nav>

      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
    name: "HeaderComponent"
};
</script>