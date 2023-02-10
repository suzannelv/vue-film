<template>
  <div class="similar-movie">
    <h2>Similar Movies</h2>
      <template v-for="movie in similarMovies.results" :key="movie.id">
        {{ movie.id }}
      </template>
  </div>
</template>

<script>
import tmdb from '@/services/tmdb';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
    setup() {
        // Obtenir l'identité de chaque film
        const route = useRoute();
        const movieId = route.params.id;
        // définir une référence appelée detailMovie qui est un objet vide {} pour surveiller les changements dans le modèle de vue.
        const similarMovies = ref({});
        // récupérer les données de chaque film selon leur id
        const fetchSimilarMovie = async () => {
            try {
                const response = await tmdb.get(`movie/${movieId}/similar?api_key=1178ff8918bc325e7a4879abff99f3b7&language=en-US&page=1`);
                similarMovies.value = response.data;
                console.log(similarMovies.value)
            }
            catch (error) {
                console.error(error);
            }
        };
        //  récupérer l'URL d'image des films
        // const posterPath = computed(() => {
        //     return "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
        // });
        // obtenir les données du film et les stocker dans le detailMovie
        onMounted(() => {
          fetchSimilarMovie();
        });
        return {
          similarMovies,
          // posterPath,
        };
    },
  
};

</script>

<style lang="less" scoped>
</style>