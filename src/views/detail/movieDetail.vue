<template>
  <div class="detail container-fluid my-5">
    <div class="row movie-info d-flex align-items-center ">
      <div class="col offset-md-1 poster text-center">
        <img :src="posterPath + detailMovie.poster_path" alt="`${detailMovie.title}` poster">
      </div>
      <div class="col infos">
        <h1>{{ detailMovie.title }}</h1>
        <!-- type du film -->
        <div v-if="detailMovie
        .genres">
        {{ detailMovie.genres.slice(0, 3).map(genre => genre.name).join(' &#8226 ') }}
      </div>
        <div class="movie_info ms-3">
            <span class="star_vote"><fa icon="star" class="star_vote me-1"/>{{ detailMovie.vote_average }}</span> | 
            <span>{{ detailMovie.original_language }}</span> |
            <span>{{ detailMovie.release_date }}</span> |
            <span>{{ detailMovie.runtime }}min</span>
            <div v-if="detailMovie.production_companies" class="my-3 fw-bolder">
              {{detailMovie.production_companies.map(company => company.name).join(',') }}
            </div>
        </div>
        <div class="join my-3">
          <router-link :to="'/subscription'">
            <button class="btn btn-secondary"><fa icon="crown" class="crown me-2"/>Join VIP to enjoin fantasy content!</button>
          </router-link>
        </div>

        <div class="description my-3">
          <p> 
            <span class="text-secondary fw-">Description:</span> {{ detailMovie.overview }}
          </p>
        </div>

        <!-- fonctions butons -->
        <buttonTag/>
      </div>
    </div>
  </div>

  <!-- films similaires-->
       <SimilarMovie/>
</template>

<script setup>

import ffRequest from '@/services/request/index'
import buttonTag from '@/components/button-tag/button-tag.vue';
import SimilarMovie from '@/components/similarMovie/similarMovie.vue';
import { moviePosterPath, API_KEY } from '@/services/request/config';
import { useRoute} from 'vue-router';
import { ref, onMounted } from 'vue';


  // Obtenir l'identité de chaque film
  const route = useRoute();
  const movieId = route.params.id;

  // définir une référence appelée detailMovie qui est un objet vide {} pour surveiller les changements dans le modèle de vue.
  const detailMovie = ref({});

  // récupérer les données de chaque film selon leur id
  const fetchDetailMovie = async () => {
      try {
          const response = await ffRequest.get({
            url: `movie/${movieId}`,
            params: {
              api_key: API_KEY,
              language:'en-US' 
            }
          });
          detailMovie.value = response;
      }
      catch (error) {
          console.error(error);
      }
  };

  //  récupérer l'URL d'image des films
  const posterPath = moviePosterPath

  // appelez la fonction fetchDetailMovie pour récupérer les données de chaque film au moment de la création du composant
  onMounted(() => {
      fetchDetailMovie();
  });
</script>


<style lang="less" scoped>
.infos {
  .star_vote, 
  .crown {
    color: rgb(239, 223, 81);
  }

  .function-group {
    .function-btn {
    margin-right: 10px;
  
    }
  }
}
</style>
