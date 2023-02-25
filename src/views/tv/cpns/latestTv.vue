<script setup>
import { tvPosterPath } from '@/services/request/config';
import useTvStore from '@/stores/modules/tvStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// récupérer les données sur les films à venir dans les stores tv
const latestTvStore = useTvStore()
latestTvStore.fetchLatestTv()
const {latestTv} = storeToRefs(latestTvStore)

// importer et utiliser le chemin d'accès commun aux affiches des tvs pour afficher les images dans l'application.
const posterPath = tvPosterPath

/**
 * Lorsque la fonction itemClick est appelée, elle prend un argument id, qui est l'identifiant de la tv sélectionné. 
 * La fonction utilise ensuite la méthode push de l'objet router pour naviguer vers la route "/detailtv/" + id. 
 */
 const router = useRouter()
const itemClick = (id) => {
  router.push("/detailtv/" + id)
}
// utiliser la méthode getMoreTv pour afficher la page suivante
const getMoreTv = () => {
    latestTvStore.fetchLatestTv()
  }

</script>


<template> 
  <div class="container latest-tv text-center">
    <span class="diviser-line d-inline-block mb-4"></span>
    <h2>TV Show on Air</h2>
    <div class="row my-5">
       <div class="col d-flex flex-wrap">
        <!-- parcourir les tv récentes -->
         <template v-for="tv in latestTv" :key="tv.id">
          <div class="tv-card"  @click="itemClick(tv.id)">
            <div class="poster" v-if="tv.poster_path">
              <!-- affiche de tv -->
                <img :src="posterPath + tv.poster_path" alt="poster">
              </div>
              <div class="text">
                <!-- titre -->
                <h5>{{ tv.name }}</h5>  
                <!-- date de sortie -->
                <small class="text-secondary" v-if="tv.first_air_date">({{ tv.first_air_date }})</small>
                <!-- popularité -->
                <p>
                  <van-rate :model-value ="tv.popularity" allow-half readonly color="#f4f431"/>
                  <fa icon="thumbs-up" class="thumbs-up ms-2"/>
                </p>
              </div>
          </div>
               
        </template>
      </div>
    </div>
  </div>
  <!--  utiliser 'van-divider' pour ajouter une ligne de séparation horizontale -->
  <van-divider
    :style="{ color: '#1989fa', borderColor: '#d5e2ed', padding: '0 16px' }">
    <!-- cliquer le bouton pour afficher plus de tv -->
    <button class="btn round-5 text-light loadBtn" @click="getMoreTv">Load More</button>
  </van-divider>
</template>



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
.thumbs-up {
  color:var(--primary-color);
}
.loadBtn {
  background-color: rgb(152, 190, 192);
}


</style>