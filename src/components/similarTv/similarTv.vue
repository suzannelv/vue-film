<template>
  <div class="container-fluid similar-tv text-center">
    <span class="diviser-line d-inline-block mb-4"></span>
    <h2>Recommendations for You</h2>
    <div class="row my-5">
       <div class="col d-flex flex-wrap">
         <template v-for="tv in similarTvs.results" :key="tv.id">
          <div class="tv-card">
            <div class="poster" v-if="tv.poster_path">
                <img :src="posterPath + tv.poster_path" alt="poster">
            </div>
              <!-- pour le films manque key:poster_path,nous avons ajouté d'une façon locale -->
            <!-- <div v-else>
                <img src="@/assets/img/poster_path/the-well.jpg" alt="The Well">
            </div> -->
            <div class="text">
              <h5>{{ tv.title }}</h5>  
              <small class="text-secondary" v-if="tv.release_date">({{ tv.release_date }})</small>
              <p>Popularity: {{tv.popularity }}</p>
            </div>
          </div>
               
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import tmdb from '@/services/tmdb';
import { useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue';

export default {
    setup() {
        // Obtenir l'identité de chaque film
        const route = useRoute();
        const tvId = route.params.id;
        // définir une référence appelée detailMovie qui est un objet vide {} pour surveiller les changements dans le modèle de vue.
        const similarTvs = ref({});

        // récupérer les données de chaque film selon leur id
        const fetchSimilarTv = async () => {
            try {
                const response = await tmdb.get(`tv/${tvId}/recommendations?api_key=1178ff8918bc325e7a4879abff99f3b7&language=en-US&page=1`);
                similarTvs.value = response.data;
            }
            catch (error) {
                console.error(error);
            }
        };
        //  récupérer l'URL d'image des films
        const posterPath = computed(() => {
            return "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
        });
     
     
        onMounted(() => {
          fetchSimilarTv();
        });
        return {
          similarTvs,
          posterPath,
  
        };
    },
  
};

</script>

<style lang="less" scoped>

.tv-card {
  width: 220px;
  height: 500px;
  img {
  width: 200px;
  height: 350px;
  object-fit: cover;
}
}


</style>