<template>
  <div class="detail container-fluid my-5">
    <div class="row movie-info d-flex align-items-center ">
      <div class="col offset-md-1 poster text-center">
       <div :style="bgPoster">
        <!-- <img :src="bgPoster + detailMovie.backdrop_path" alt="" /> -->
      </div>
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

<script>
import tmdb from '@/services/tmdb';
import buttonTag from '@/components/button-tag/button-tag.vue';
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
        const bgPoster = computed(() => {
          return  "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces"
        })
        // obtenir les données du film et les stocker dans le detailMovie
        onMounted(() => {
            fetchDetailMovie();
        });
        return {
            detailMovie,
            posterPath,
            bgPoster
        };
    },
    components: { SimilarMovie, buttonTag }
};

</script>


<style lang="less" scoped>
// .bgPoster {
//   position:absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 2;

// }
.movie-info {
  background: url("bgPoster + detailMovie.backdrop_path");
}
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