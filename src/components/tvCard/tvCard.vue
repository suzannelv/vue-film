<template>
  <div class="container tv-card">
    <div class="row">
      <template v-for="tv in tvs" :key="tv.id">
      <div class="col my-4">
        <div class="card" style="width: 18rem;">
          <img :src="posterPath + tv.poster_path" class="card-img-top" alt="tv-poster">
          <div class="card-body reset-size">
            <h5 class="card-title">{{tv.name}}</h5>
            <p class="card-text">{{ tv.vote_average }} <fa icon="thumbs-up" class="thumbs-up"/></p>
            <a href="/detail/tv.id" class="btn btn-secondary mb-1">Learn More</a>
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

export default {
  setup() {
    const tvs = ref([]);

    const fetchTvs = async () => {
      try {
        const { data } = await tmdb.get('tv/popular');
        tvs.value = data.results;
      
      } catch (error) {
        console.log(error);
      }
    };

  const posterPath = computed(() => {
    return "https://www.themoviedb.org/t/p/w220_and_h330_face"
  });

    onMounted(() => {
      fetchTvs();
    });

    return {
      tvs,
      posterPath
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