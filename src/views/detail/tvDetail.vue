<script setup>
import ffRequest from '@/services/request/index'
import buttonTag from '@/components/button-tag/button-tag.vue';
import similarTv from '@/components/similarTv/similarTv.vue';
import { tvPosterPath, API_KEY } from '@/services/request/config';
import { useRoute} from 'vue-router';
import { ref, onMounted } from 'vue';

// Obtenir l'identité de chaque tv
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

// appelez la fonction fetchDetailTv pour récupérer les données de chaque tv au moment de la création du composant
onMounted(() => {
    fetchDetailTv();
});
</script>

<template>
  <div class="detail container-fluid my-5">
    <div class="row tv-info d-flex align-items-center ">
      <div class="col offset-md-1 poster text-center">
        <!-- affiche de la tv-->
        <img :src="posterPath + detailTv.poster_path" alt="`${detailTv.title}` poster">
      </div>
      <!-- infos sur la tv -->
      <div class="col infos">
        <h1>{{ detailTv.name }}</h1>
        <h2 class="text-secondary">({{ detailTv.original_name }})</h2>
        <span v-if="detailTv.first_air_date" class="text-secondary">({{ detailTv.first_air_date }})</span>
       
        <div class="tv_info mt-1">
          <!-- afficher la note moyenne d'une tv sur une échelle de 0 à 10 avec une icône d'étoile avant le nombre. -->
          <!--  
            Utiliser un opérateur ternaire pour vérifier si la note moyenne existe (si elle n'est pas null ou undefined)
            Si la note moyenne existe, cette expression utilise la méthode toFixed() pour arrondir la note moyenne à un chiffre après la virgule. 
            Si la note moyenne n'existe pas (si elle est null ou undefined), cette expression affiche simplement 'N/A'.
           -->
            <span class="star_vote"><fa icon="star" class="star_vote me-1"/>{{ detailTv.vote_average ? detailTv.vote_average.toFixed(1):'N/A'}}</span> | 
            <span v-if="detailTv.original_language">{{ detailTv.original_language }}</span>
        </div>

        <!-- cliquer le bouton pour sauter à la page d'abonnement -->
        <div class="join my-3">
          <router-link :to="'/subscription'">
            <button class="btn btn-secondary"><fa icon="crown" class="crown me-2"/>Join VIP to enjoin fantasy content!</button>
          </router-link>
        </div>
         
        <!-- description -->
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


<style lang="less" scoped>

.infos {
  .star_vote, 
  .crown {
    color: rgb(239, 223, 81);
  }
}
</style>
