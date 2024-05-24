<template>
  <SliderComponent titulo="Formulario"></SliderComponent>
  <div class="center">
    <section id="content">
      <h2 class="subheader">{{ titulo }}</h2>
      <div class="usuario" v-if="user">
        <h3>{{ user.nombre }}</h3>
        <h3>{{ user.apellidos }}</h3>
        <p>{{ user.bio }}</p>
      </div>
      <form action="" class="mid-form" @submit.prevent="mostrarUsuario()">
        <div class="form-group">
          <label for="nombre" >Nombre: </label>
          <input type="text" name="nombre" v-model="user.nombre" required>
        </div>
        <div class="form-group">
          <label for="apellidos">Apellidos: </label>
          <input type="text" name="apellidos"  v-model="user.apellidos" required> 
        </div>
        <div class="form-group">
          <label for="bio">Biografía: </label>
          <textarea name="bio" id=""  v-model="user.bio" required> </textarea>
        </div>
        <div class="form-group radiobuttons">Genero:
          <input type="radio" name="genero" id="" value="hombre" v-model="user.genero"/> Hombre
          <input type="radio" name="genero" id="" value="mujer" v-model="user.genero"/> Mujer
          <input type="radio" name="genero" id="" value="otro" v-model="user.genero" checked> Otro
        </div>
        <div class="clearfix"></div>
        <input type="submit" value="Enviar" class="btn btn-success" @click="mostrarUsuario">
      </form>
    </section>
  </div>
  <SidebarComponent></SidebarComponent>
</template>

<script>
import SidebarComponent from './Sidebar.vue';
import SliderComponent from './Slider.vue';

export default {
  name: "FormularioComponent",
  components: {
    SliderComponent,
    SidebarComponent
  },
  data() {
    return {
      titulo: "Formulario",
      user:{
        nombre: "",
        apellidos:"",
        bio:"",
        genero:"",
      }
    }
  },
  methods:{
    mostrarUsuario(){
      console.log(this.user);
    }
  }
};
</script>