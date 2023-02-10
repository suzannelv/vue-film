<template>
  <div class="detail container my-5">
    <div class="row movie-info d-flex ">
      <div class="col poster">
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
        <!-- <button-tag/> -->
      
        <div class="button-tag">
          <div class="function-group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn function-btn btn-outline-primary" for="btnradio1"><fa icon="play" class="me-2"/>Play</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn function-btn btn-outline-primary" for="btnradio2"><fa icon="arrow-up-from-bracket" class="me-2"/>Share</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn function-btn btn-outline-primary" for="btnradio3"><fa icon="mobile-screen-button" class="me-2"/>APP</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
            <label class="btn function-btn btn-outline-primary" for="btnradio4"><fa icon="bookmark" class="me-2"/>Watch Later</label>
        </div>
        </div>

    
       
        
        

      </div>
    </div>
  </div>


  <!-- films similaires-->

  <SimilarMovie/>
</template>

<script>
import tmdb from '@/services/tmdb';
import SimilarMovie from '@/components/similarMovie/similarMovie.vue';
import { useRoute} from 'vue-router';
import { ref, computed, onMounted } from 'vue';


export default {
    setup() {
        // Obtenir l'identité de chaque film
        const route = useRoute();
        const movieId = route.params.id;
        // définir une référence appelée detailMovie qui est un objet vide {} pour surveiller les changements dans le modèle de vue.
        const detailMovie = ref({});
        // récupérer les données de chaque film selon leur id
        const fetchDetailMovie = async () => {
            try {
                const response = await tmdb.get(`movie/${movieId}?api_key=1178ff8918bc325e7a4879abff99f3b7&language=en-US`);
                detailMovie.value = response.data;
            }
            catch (error) {
                console.error(error);
            }
        };
        //  récupérer l'URL d'image des films
        const posterPath = computed(() => {
            return "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
        });
        // obtenir les données du film et les stocker dans le detailMovie
        onMounted(() => {
            fetchDetailMovie();
        });
        return {
            detailMovie,
            posterPath,
        };
    },
    components: { SimilarMovie }
};

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

  //   .btn-outline-primary {
  //     --bs-btn-active-bg: var(--primary-color) !important;
  //     --bs-btn-border-color:  var(--primary-color) !important;
  // }
  
  }
}
</style>