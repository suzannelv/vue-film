<template> 
  <div class="container coming-movie text-center">
    <span class="diviser-line d-inline-block mb-4"></span>
    <h2>Coming Soon</h2>
    <div class="row my-5">
       <div class="col d-flex flex-wrap">
         <template v-for="movie in comingMovies" :key="movie.id">
          <div class="movie-card" @click="itemClick(movie.id)" >
            <div class="poster" v-if="movie.poster_path">
              <img :src="posterPath + movie.poster_path" alt="poster">
            </div>
              <!-- pour le films manque key:poster_path,nous avons ajouté d'une façon locale -->
              <div v-else>
                <img src="@/assets/img/poster_path/the-well.jpg" alt="The Well">
              </div>
              <div class="text">
                <h5>{{ movie.title }}</h5>  
                <small class="text-secondary" v-if="movie.release_date">({{ movie.release_date }})</small>
                <p>Popularity: {{ movie.popularity }}</p>
              </div>
          </div>      
        </template>
      </div>
    </div>

    <button @click="more">more</button>
  </div>
</template>

<script setup>

import { moviePosterPath } from '@/services/request/config';
import useMoviesStore from '@/stores/modules/movieStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// récupérer les données sur les films à venir dans les stores movie
const comingMoviesStore = useMoviesStore()
comingMoviesStore.fetchComingMovies()
const {comingMovies} = storeToRefs(comingMoviesStore)

// importer et utiliser le chemin d'accès commun aux affiches des films pour afficher les images dans l'application.
const posterPath = moviePosterPath

/**
 * Lorsque la fonction itemClick est appelée, elle prend un argument id, qui est l'identifiant du film sélectionné. La fonction utilise ensuite la méthode push de l'objet router pour naviguer vers la route "/detail/" + id. 
 *
 */
const router = useRouter()
const itemClick = (id) => {
  router.push("/detail/" + id)
}

const more = () => {
  comingMoviesStore.fetchComingMovies()
}

</script>

<style lang="less" scoped>

.movie-card {
  width: 220px;
  height: 500px;
  img {
  width: 200px;
  height: 350px;
  object-fit: cover;
}
}


</style>