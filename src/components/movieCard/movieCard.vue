<template>
  <div class="container movie-card">
    <div class="row">
      <template v-for="movie in movies" :key="movie.id">
      <div class="col my-4" @click="itemClick(movie.id)">
        <div class="card" style="width: 18rem;">
          <img :src="posterPath + movie.poster_path" class="card-img-top" alt="movie-poster">
          <div class="card-body reset-size">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-text">{{ movie.vote_average }} <fa icon="thumbs-up" class="thumbs-up"/></p>
            <a :href="'/detail/' + movie.id" class="btn btn-secondary mb-1">Learn More</a>
          </div>
        </div>
       </div>
      </template>
     
    </div>
  </div>
</template>

<script>
import tmdb from "@/services/tmdb";
import { ref, onMounted, computed } from 'vue';
import { useRouter } from "vue-router";

export default {
  setup() {
    // déclarer un tableau vide responsive sur les movies
    const movies = ref([]);

    // récupérer les données sur "movie/popular"
    const fetchMovies = async () => {
      try {
        const { data } = await tmdb.get('movie/popular');
        movies.value = data.results;
      
      } catch (error) {
        console.error(error);
      }
    };
    
  //  récupérer l'URL d'image des films
  const posterPath = computed(() => {
    return "https://www.themoviedb.org/t/p/w440_and_h660_face"
  });

  //  Dans crochet onMounted, pour récupérer une liste de films en appelant la fonction fetchMovies.
    onMounted(() => {
      fetchMovies();
    });



    const router = useRouter()
    const itemClick = (id) => {
      router.push("/detail/" + id)
      console.log(id)
    }

    return {
      movies,
      posterPath,
      itemClick
    };
  },
};
</script>

<style lang="less" scoped>
.reset-size {
  width: 286px;
  height: 150px;
}
.thumbs-up {
  color:var(--primary-color);
}

</style>