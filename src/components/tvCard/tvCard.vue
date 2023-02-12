<template>
  <div class="container tv-card">
    <div class="row">
      <template v-for="tv in tvs" :key="tv.id">
      <div class="col my-4" @click="itemClick(tv.id)">
        <div class="card" style="width: 18rem;">
          <img :src="posterPath + tv.poster_path" class="card-img-top" alt="tv-poster">
          <div class="card-body reset-size">
            <h5 class="card-title">{{tv.name}}</h5>
            <p class="card-text">{{ tv.vote_average }} <fa icon="thumbs-up" class="thumbs-up"/></p>
            <a :href="'/detailtv/' + tv.id" class="btn btn-secondary mb-1">Learn More</a>
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
    // déclarer un tableau vide responsive sur les tvs
    const tvs = ref([]);

    // récupérer les données sur "tv/popular"
    const fetchTvs = async () => {
      try {
        const { data } = await tmdb.get('tv/popular');
        tvs.value = data.results;
        console.log(tvs)
      
      } catch (error) {
        console.log(error);
      }
    };

  //  récupérer l'URL d'image des tv
  const posterPath = computed(() => {
    return "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
  });

    onMounted(() => {
      fetchTvs();
    });

    const router = useRouter()
    const itemClick = (id) => {
      router.push("/detailtv/" + id)
      console.log(id)
    }

    return {
      tvs,
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