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
  <div class="container-fluid latest-tv">
    <span class="diviser-line d-inline-block mb-4 text-center"></span>
    <h2 class="text-center">TV Show on Air</h2>
    <div class="row my-5">
        <!-- parcourir les tv récentes -->
         <template v-for="tv in latestTv" :key="tv.id">
            <div class="col my-4" @click="itemClick(tv.id)">
              <div class="card tv-card mx-auto" style="width: 18rem;">
                <div class="poster" v-if="tv.poster_path">
              <!-- affiche de tv -->
                  <img :src="posterPath + tv.poster_path" class="card-img-top" alt="poster">
                </div>
                <div class="poster-substitute" v-else>
                  <img src="@/assets/img/avatar/switch.jpg" alt="">
                </div>
                <div class="text card-body reset-size">
                  <!-- titre -->
                  <h5 class="card-title">{{ tv.name }}</h5>  
                  <!-- date de sortie -->
                  <small class="text-secondary fs-6" v-if="tv.first_air_date">({{ tv.first_air_date }})</small>
                  <!-- popularité -->
                  <p>
                    <van-rate :model-value ="tv.popularity" allow-half readonly color="#f4f431"/>
                    <fa icon="thumbs-up" class="thumbs-up ms-2"/>
                  </p>
                  <button class="btn btn-secondary position-absolute bottom-0 mb-3">Learn more</button> 
                </div>
            </div>
          </div>     
        </template>
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
  .reset-size {
  width: 286px;
  height: 180px;
}
.thumbs-up {
  color:var(--primary-color);
}
}

.loadBtn {
  background-color: rgb(152, 190, 192);
}


</style>