<script setup>

import ffRequest from '@/services/request/index'
import buttonTag from '@/components/button-tag/button-tag.vue';
import SimilarMovie from '@/components/similarMovie/similarMovie.vue';
import { moviePosterPath, API_KEY } from '@/services/request/config';
import { useRoute} from 'vue-router';
import { ref, onMounted } from 'vue';


// récupèrent l'ID du film à partir de l'objet de route en utilisant useRoute() de Vue Router.
  const route = useRoute();
  // récupérer la valeur de l'ID du film dans l'URL de la page actuelle
  const movieId = route.params.id;

  // définir une référence appelée detailMovie qui est un objet vide pour stocker les détail du film récupérés à partir de l'API 
  const detailMovie = ref({});

  // récupérer les données de chaque film selon leur ID
  const fetchDetailMovie = async () => {
    // un bloc try qui permet de gérer les erreurs dans le code
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

  // récupérer l'URL d'image des films
  const posterPath = moviePosterPath

  // appeler la fonction fetchDetailMovie une fois que le composant a été monté
  onMounted(() => {
      fetchDetailMovie();
  });
</script>


<template>
  <div class="detail container-fluid my-5">
    <div class="row movie-info d-flex align-items-center ">
      <div class="col offset-md-1 poster text-center">
        <!-- affiche du film -->
        <img :src="posterPath + detailMovie.poster_path" alt="`${detailMovie.title}` poster">
      </div>
      <div class="col infos">
        <h1>{{ detailMovie.title }}</h1>
        <!-- type du film -->
        <div v-if="detailMovie
           .genres">
           <!-- Le filtre slice(0, 3) est utilisé pour limiter la liste des genres à 3 éléments au maximum. 
           map() est utilisé pour extraire le nom de chaque genre à partir de l'objet genre dans le tableau genres. 
           join(' &#8226 ') est utilisé pour joindre les noms de genre avec un symbole de point central. -->
           {{ detailMovie.genres.slice(0, 3).map(genre => genre.name).join(' &#8226 ') }}
        </div>

        <div class="movie_info ms-3">
          <!-- afficher la note moyenne d'un film -->
          <!--  
            Utiliser un opérateur ternaire pour vérifier si la note moyenne existe (si elle n'est pas null ou undefined)
            Si la note moyenne existe, cette expression utilise la méthode toFixed() pour arrondir la note moyenne à un chiffre après la virgule. 
            Si la note moyenne n'existe pas (si elle est null ou undefined), cette expression affiche simplement 'N/A'.
           -->
            <span class="star_vote"><fa icon="star" class="star_vote me-1"/>{{ detailMovie.vote_average ? detailMovie.vote_average.toFixed(1) : 'N/A' }}</span> | 
            <span>{{ detailMovie.original_language }}</span> |
            <span>{{ detailMovie.release_date }}</span> |
            <span>{{ detailMovie.runtime }}min</span>
            <!-- nom de toutes les compagnies de production associées à un film -->
            <div v-if="detailMovie.production_companies" class="my-3">
              Production Companies: {{detailMovie.production_companies.map(company => company.name).join(', ') }}
            </div>
        </div>
        
        <!-- cliquer le bouton pour sauter à la page d'abonnement -->
        <div class="join my-3">
          <router-link :to="'/subscription'">
            <button class="btn btn-secondary"><fa icon="crown" class="crown me-2"/>Join VIP to enjoin fantasy content!</button>
          </router-link>
        </div>

        <!-- description du film -->
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



<style lang="less" scoped>
.infos {
  .star_vote, 
  .crown {
    color: rgb(239, 223, 81);
  }
}
</style>
