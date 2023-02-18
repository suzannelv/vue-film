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

const getMoreMovies = () => {
  comingMoviesStore.fetchComingMovies()
}

</script>

<template> 
  <div class="container coming-movie text-center">
    <span class="diviser-line d-inline-block mb-4"></span>
    <h2>Coming Soon</h2>
    <div class="row my-5">
       <div class="col d-flex flex-wrap">
         <!--parcourir le tableau de films à venir et crée une carte pour chaque film. La propriété :key est utilisée pour aider à identifier chaque élément dans la liste.  -->
         <template v-for="movie in comingMovies" :key="movie.id">
          <div class="movie-card" @click="itemClick(movie.id)" >
            <div class="poster" v-if="movie.poster_path">
            <!-- image de l'affiche du film -->
              <img :src="posterPath + movie.poster_path" alt="poster">
            </div>
              <!-- pour le films manque key:poster_path,nous avons ajouté d'une façon locale -->
              <div v-else>
                <img src="@/assets/img/poster_path/the-well.jpg" alt="The Well">
              </div>
              <!-- les infos brèves sur chaque film -->
              <div class="text">
                <!-- titre -->
                <h5>{{ movie.title }}</h5>  
                <!-- date de sortie -->
                <small class="text-secondary" v-if="movie.release_date">({{ movie.release_date }})</small>
                <!-- popularité -->
                <p>Popularity: {{ movie.popularity }}</p>
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

.loadBtn {
  background-color: rgb(152, 190, 192);
}


</style>