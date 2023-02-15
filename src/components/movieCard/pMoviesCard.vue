<template>
  <div class="popular-movies container-fluid">
    <div class="row">
      <template v-for="movie in popularMovies" :key="movie.id">
        <div class="col my-4" @click="itemClick(movie.id)">
          <div class="card" style="width: 18rem;">
            <img :src="posterPath + movie.poster_path" class="card-img-top" alt="movie-poster">
            <div class="card-body reset-size">
              <h5 class="card-title">{{movie.title}} 
                <small class="text-secondary fs-6">({{ movie.release_date}})</small>
              </h5> 
              <p class="card-text">{{ movie.vote_average }} <fa icon="thumbs-up" class="thumbs-up"/></p>
              <button class="btn btn-secondary position-absolute bottom-0 mb-3">Learn more</button>
            </div>
          </div>
        </div>
      </template>
    </div>
    
  </div>

  <button @click="getMoreMovies">loading</button>
</template>

<script setup>
import {moviePosterPath} from '@/services/request/config'
import useMoviesStore from '@/stores/modules/movieStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// la fonction usePMoviesStore() pour instancier le magasin "popular movies". 
const pMovieStore = useMoviesStore()
// on appele la méthide fetchPopularMovies() pour récupérer les données sur les films populaires.
pMovieStore.fetchPopularMovies()
// la fonction storeToRefs() pour transformer la propriété « popularMovies » de l'état du magasin en un objet réactif. 
const {popularMovies} = storeToRefs(pMovieStore)

// importer et utiliser le chemin d'accès commun aux affiches des films populaires pour afficher les images dans l'application.
const posterPath = moviePosterPath


// utiliser l'objet routerde la bibliothèque Vue Router pour naviguer vers une route spécifique lorsque l'utilisateur clique sur un film
const router = useRouter()
/**
 * Lorsque la fonction itemClick est appelée, elle prend un argument id, qui est l'identifiant du film sélectionné. La fonction utilise ensuite la méthode push de l'objet router pour naviguer vers la route "/detail/" + id. 
 *
 */
  const itemClick = (id) => {
    router.push("/detail/" + id)
  }


  const getMoreMovies = () => {
    pMovieStore.fetchPopularMovies()
  }

</script>

<style lang="less" scoped>
.reset-size {
  width: 286px;
  height: 150px;
}
.thumbs-up {
  color:var(--primary-color);
}

</style>