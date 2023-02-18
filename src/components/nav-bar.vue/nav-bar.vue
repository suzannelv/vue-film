<script setup>
import navbarData from '@/assets/data/navbar.js';
import login from '../login/login.vue';
import {useRouter} from 'vue-router';

// Lorsque la fonction itemClick est appelée, elle utilise l'objet router pour naviguer vers la route associée à l'élément de navigation cliqué. 
const router = useRouter()
const itemClick = (item) => {
  // la méthode push de l'objet router avec l'URL de la route correspondante qui est stockée dans la propriété path de l'objet item.
  router.push(item.path)
   
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
    <div class="container-fluid ms-5">
      <!-- logo du site -->
      <router-link to="/home">
        <a>
          <img src="@/assets/img/logo/favicon-32x32.png" alt="logo Film Franzy"/>
        </a>
      </router-link>

        <!-- fonction toggle navbar -->
        <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      <!-- parcourir le tableau des éléments de navigation pour créer une répétition d'un bloc de code venant du navbarData  -->
        <div class="collapse navbar-collapse mx-5" id="navbarNav">
          <template v-for="item in navbarData" >
            <ul class="navbar-nav me-5" @click="itemClick(item)">
              <li class="nav-item" >
                <a class="nav-link active text-light" aria-current="page" href="#">
                  {{ item.text }}
                </a>
              </li>
            </ul>
          </template>

       <!-- section conecter le compte -->
          <login/>
        </div>
      </div>
  </nav>
</template>


<style lang="less" scoped>
</style>