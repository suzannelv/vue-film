<script setup>

import {moviePosterPath} from '@/services/request/config'
import useMoviesStore from '@/stores/modules/movieStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute()

// crée une variable "movieId" qui contient l'ID du film récupéré à partir des paramètres de la route.
const movieId = route.params.id;

// la fonction useMoviesStore() pour instancier le magasin "similar movies". 
const similarMovieStore = useMoviesStore()

// on appele la méthode fetchSimilarMovie() pour récupérer les données sur les films similaires.
similarMovieStore.fetchSimilarMovies(movieId)

// la fonction storeToRefs() pour transformer la propriété « similarMovies » de l'état du magasin en un objet réactif. 
const {similarMovies} = storeToRefs( similarMovieStore)

// crée une variable "posterPath" qui contient le chemin d'accès aux images de poster de film à partir de la variable "moviePosterPath" du module de configuration de la requête.
const posterPath = moviePosterPath

</script>

<template>
  <div class="container-fluid similar-movie text-center">
    <span class="diviser-line d-inline-block mb-4"></span>
    <h2>Similar Movies</h2>
    <div class="row my-5">
       <div class="col d-flex flex-wrap">
        <!--  crée un modèle de répétition (v-for) sur le tableau "similarMovies" et créer un élément pour chaque objet "movie". La clé ":key" est utilisée pour améliorer la performance de la répétition en identifiant chaque élément avec une clé unique. -->
         <template v-for="movie in similarMovies" :key="movie.id">
          <!-- les infos du films -->
          <div class="movie-card" v-if="movie.poster_path">
            <!-- image du poster -->
            <div class="poster" >
                <img :src="posterPath + movie.poster_path" alt="poster">
            </div>
            <!-- un élément qui contient le titre, la date de sorie et la popularité du film -->
            <div class="text">
              <h5>{{ movie.title }}</h5>  
              <small class="text-secondary" v-if="movie.release_date">({{ movie.release_date }})</small>
              <!--  afficher la popularité avec seulement un chiffre après la virgule -->
              <p>Popularity: {{ movie.popularity.toFixed(1) }}</p> 
            </div>
          </div>     
        </template>
      </div>
    </div>
  </div>
</template>

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