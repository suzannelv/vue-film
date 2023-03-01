
<script setup>
import { moviePosterPath } from '@/services/request/config';
import useMoviesStore from '@/stores/modules/movieStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// récupérer les données sur les top films dans les stores movie
const topMoviesStore = useMoviesStore()  
topMoviesStore.fetchTopMovies()
const {topMovies} = storeToRefs(topMoviesStore)     

// importer et utiliser le chemin d'accès commun aux affiches des films pour afficher les images dans l'application.
const posterPath = moviePosterPath


/**
 * Lorsque la fonction itemClick est appelée, elle prend un argument id, qui est l'identifiant du film sélectionné. 
 * La fonction utilise ensuite la méthode push de l'objet router pour naviguer vers la route "/detail/" + id. 
 
 */
const router = useRouter()
const itemClick = (id) => {
  router.push("/detail/" + id)
}

// utiliser la méthode getMoreTv pour afficher la page suivante
const getMoreMovies = () => {
    topMoviesStore.fetchTopMovies()
  }
</script>


<template> 
  <div class="top-movie container-fluid">
    <span class="diviser-line d-inline-block mb-4 text-center"></span>
    <h2 class="text-center">Top List</h2>
    <div class="row">
      
         <!--parcourir le tableau de films topMovies et crée une carte pour chaque film. La propriété :key est utilisée pour aider à identifier chaque élément dans la liste.  -->  
    
        <template v-for="movie in topMovies" :key="movie.id">  
          <div class="col my-4">
            <div class="card movie-card mx-auto" style="width: 18rem;" @click="itemClick(movie.id)">
                <div class="poster" v-if="movie.poster_path">
                    <!-- image de l'affiche du film -->
                    <img :src="posterPath + movie.poster_path" class="card-img-top" alt="poster">
                </div>

              <!-- infos brève sur les films -->
                <div class="text card-body reset-size">
                    <!-- titre -->
                    <h5 class="card-title">{{ movie.title }}</h5>  
                    <!-- date de sortie -->
                    <small class="text-secondary fs-6" v-if="movie.release_date">({{ movie.release_date }})</small>
                    <!-- popularité -->
                    <p>
                      <van-rate :model-value ="movie.popularity" allow-half readonly color="#f4f431"/>
                      <fa icon="thumbs-up" class="thumbs-up ms-2"/>
                    </p>
                    <button class="btn btn-secondary position-absolute bottom-0 mb-3">Learn more</button>
                </div>
            </div>  
          </div>      
        </template>
    </div>
  </div>
  <!--  utiliser 'van-divider' pour ajouter une ligne de séparation horizontale -->
  <van-divider
    :style="{ color: '#1989fa', borderColor: '#d5e2ed', padding: '0 16px' }">
    <!-- cliquer le bouton pour afficher plus de tv -->
    <button class="btn round-5 text-light loadBtn" @click="getMoreMovies">Load More</button>
  </van-divider>
</template>


<style lang="less" scoped>

.movie-card {
.reset-size {
  width: 286px;
  height: 180px;
}
.thumbs-up {
  color:var(--primary-color);
}
}

.loadBtn {
  background-color: rgb(152, 190, 192);
}

</style>