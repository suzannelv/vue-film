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

// utiliser la méthode getMoreMovies pour afficher la page suivante
  const getMoreMovies = () => {
    pMovieStore.fetchPopularMovies()
  }

</script>


<template>
  <div class="popular-movies container-fluid">
    <div class="row">
      <!--parcourir le tableau de films popularMovies et crée une carte pour chaque film. La propriété :key est utilisée pour aider à identifier chaque élément dans la liste.  -->
      <template v-for="movie in popularMovies" :key="movie.id">
        <div class="col my-4" @click="itemClick(movie.id)">
          <div class="card mx-auto" style="width: 18rem;">
            <!-- image de l'affiche du film -->
            <img :src="posterPath + movie.poster_path" class="card-img-top" alt="movie-poster">
            <div class="card-body reset-size">
              <!-- titre -->
              <h5 class="card-title">{{movie.title}} 
                <!-- date de sortie -->
                <small class="text-secondary fs-6">({{ movie.release_date}})</small>
              </h5> 
              <!-- note du film -->
              <p>
                <van-rate :model-value ="movie.vote_average" allow-half readonly color="#f4f431"/>
                <fa icon="thumbs-up" class="thumbs-up ms-2"/>
              </p>
              
              <button class="btn btn-secondary position-absolute bottom-0 mb-3 ms-2">Learn more</button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
 <!--  utiliser 'van-divider' pour ajouter une ligne de séparation horizontale -->
  <van-divider
    :style="{ color: '#1989fa', borderColor: '#d5e2ed', padding: '0 16px' }">
    <!-- cliquer le bouton pour afficher plus de films -->
    <button class="btn round-5 text-light loadBtn" @click="getMoreMovies">Load More</button>
  </van-divider>
</template>


<style lang="less" scoped>
// définir la taille de la partie pour les texts de chaque carte
.reset-size {
  width: 286px;
  height: 180px;
}
.thumbs-up {
  color:var(--primary-color);
}

.loadBtn {
  background-color: rgb(152, 190, 192);
}
</style>