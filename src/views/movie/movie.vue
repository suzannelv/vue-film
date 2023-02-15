<template>
  <div class="nowmovie">
    <!-- <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" v-for="movie in nowMovie.results">
          <img :src="posterPath + movie.poster_path" alt="movies right now">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->

    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" v-for="movie in nowMovie.results">
      <img :src="posterPath + movie.poster_path" alt="movies right now">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div> 

<div class="diviser-line mx-auto"></div>
<popularMovies/>

<div class="diviser-line mx-auto"></div>
<topMovies/>

<div class="diviser-line mx-auto"></div>
<comingMovies/>

</template>

<script>
import tmdb from '@/services/tmdb';
import popularMovies from '../home/cpns/popularMovies.vue';
import topMovies from './cpns/topMovies.vue';
import comingMovies from './cpns/comingMovies.vue'
import { useRoute} from 'vue-router';
import { ref, computed, onMounted } from 'vue';




export default {
    setup() {
        // Obtenir l'identité de chaque film
        const route = useRoute();
        const movieId = route.params.id;
        // définir une référence appelée detailMovie qui est un objet vide {} pour surveiller les changements dans le modèle de vue.
        const nowMovie = ref({});
        // récupérer les données de chaque film selon leur id
        const fetchNowMovie = async () => {
            try {
                const response = await tmdb.get("movie/now_playing?api_key=1178ff8918bc325e7a4879abff99f3b7&language=en-US&page=1");
                nowMovie.value = response.data;
        
            }
            catch (error) {
                console.error(error);
            }
        };
        //  récupérer l'URL d'image des films
        const posterPath = computed(() => {
            return "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
        });
        // obtenir les données du film et les stocker dans le nowMovie
        onMounted(() => {
            fetchNowMovie();
        });
        return {
            nowMovie,
            posterPath,
        };
    },
    components: { popularMovies, topMovies, comingMovies }
};

</script>


<style lang="less" scoped>

img {
  width: 100%;
  height: 1000px;
  object-fit:cover;
}
</style>