<template>
  <div class="detail container-fluid my-5">
    <div class="row tv-info d-flex align-items-center ">
      <div class="col offset-md-1 poster text-center">
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

<script setup>
import ffRequest from '@/services/request/index'
import buttonTag from '@/components/button-tag/button-tag.vue';
import similarTv from '@/components/similarTv/similarTv.vue';
import { tvPosterPath, API_KEY } from '@/services/request/config';
import { useRoute} from 'vue-router';
import { ref, onMounted } from 'vue';

// Obtenir l'identité de chaque film
const route = useRoute();
const tvId = route.params.id;

// définir une référence appelée detailTv qui est un objet vide {} pour surveiller les changements dans le modèle de vue.
const detailTv = ref({});

// récupérer les données de chaque tv selon leur id
const fetchDetailTv = async () => {
    try {
        const response = await ffRequest.get({
            url: `tv/${tvId}`,
            params: {
                api_key: API_KEY,
                language:'en-US' 
            }
        });
        detailTv.value = response;
    }
    catch (error) {
        console.error(error);
    }
};

//  récupérer l'URL d'image des tvs
const posterPath = tvPosterPath

// appelez la fonction fetchDetailMovie pour récupérer les données de chaque tv au moment de la création du composant
onMounted(() => {
    fetchDetailTv();
});
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
  }
}
</style>
