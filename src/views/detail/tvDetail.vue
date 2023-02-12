<template>
  <div class="detail container-fluid my-5">
    <div class="row tv-info d-flex align-items-center ">
      <div class="col offset-md-1 poster text-center">
       <div :style="bgPoster">
        <!-- <img :src="bgPoster + detailMovie.backdrop_path" alt="" /> -->
      </div>
        <img :src="posterPath + detailTv.poster_path" alt="`${detailTv.title}` poster">
      </div>
      <div class="col infos">
        <h1>{{ detailTv.name }}</h1>
        <h2 class="text-secondary">({{ detailTv.original_name }})</h2>
        <span v-if="detailTv.first_air_date" class="text-secondary">({{ detailTv.first_air_date }})</span>
       
        <div class="tv_info mt-1">
            <span class="star_vote"><fa icon="star" class="star_vote me-1"/>{{ detailTv.vote_average }}</span> | 
            <span v-if="detailTv.original_language">{{ detailTv.original_language }}</span>
        </div>
        <div class="join my-3">
          <router-link :to="'/subscription'">
            <button class="btn btn-secondary"><fa icon="crown" class="crown me-2"/>Join VIP to enjoin fantasy content!</button>
          </router-link>
        </div>

        <div class="description my-3">
          <p> 
            <span class="text-secondary fw-">Description:</span> {{ detailTv.overview }}
          </p>
        </div>

        <!-- fonctions butons -->
        <buttonTag/>
      </div>
    </div>
  </div>


  <!-- recommandation tv-->

  <similarTv/>
</template>

<script>
import tmdb from '@/services/tmdb';
import buttonTag from '@/components/button-tag/button-tag.vue';
import similarTv from '@/components/similarTv/similarTv.vue';
import { useRoute} from 'vue-router';
import { ref, computed, onMounted } from 'vue';


export default {
    setup() {
        // Obtenir l'identité de chaque film
        const route = useRoute();
        const tvId = route.params.id;
        // définir une référence appelée detailTv qui est un objet vide {} pour surveiller les changements dans le modèle de vue.
        const detailTv = ref({});
        // récupérer les données de chaque tv selon leur id
        const fetchDetailTv = async () => {
            try {
                const response = await tmdb.get(`tv/${tvId}?api_key=1178ff8918bc325e7a4879abff99f3b7&language=en-US`);
                detailTv.value = response.data;
            }
            catch (error) {
                console.error(error);
            }
        };
        //  récupérer l'URL d'image des tvs
        const posterPath = computed(() => {
            return "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
        });
        const bgPoster = computed(() => {
          return  "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces"
        })
        // obtenir les données du film et les stocker dans le detailMovie
        onMounted(() => {
            fetchDetailTv();
        });
        return {
            detailTv,
            posterPath,
            bgPoster
        };
    },
    components: { buttonTag, similarTv }
};

</script>


<style lang="less" scoped>
// .bgPoster {
//   position:absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 2;

// }
.tv-info {
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
