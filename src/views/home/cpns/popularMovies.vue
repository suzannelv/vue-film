<template>
  <div class="popular-movies">
    <h2>Popular Movies</h2>
     <div class="d-flex">
      <template v-for="movie in movies" :key="movie.id">
        <div class="card" style="width: 18rem;">
          <img :src="posterPath" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-text">{{ movie.vote_average }}</p>
            <a href="#" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </template>
      
     </div>
  </div>
</template>

<script>
import tmdb from "@/services/tmdb";
import { ref, onMounted, computed } from 'vue';

export default {
  setup() {
    const movies = ref([]);

    const fetchMovies = async () => {
      try {
        const { data } = await tmdb.get('movie/popular');
        movies.value = data.results;
      } catch (error) {
        console.log(error);
      }
    };

  const posterPath = computed((movie) => {
    return "https://www.themoviedb.org/t/p/w440_and_h660_face" + movie.poster_path
  });

    onMounted(() => {
      fetchMovies();
    });

    return {
      movies,
      posterPath
    };
  },
};
</script>

<style lang="less" scoped>
</style>
