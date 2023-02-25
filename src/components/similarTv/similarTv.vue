<script setup>

import {tvPosterPath} from '@/services/request/config'
import useTvStore from '@/stores/modules/tvStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute()

// crée une variable "tvId" qui contient l'ID du film récupéré à partir des paramètres de la route.
const tvId = route.params.id;

// la fonction useTvStore() pour instancier le magasin "similar tv". 
const similarTvStore = useTvStore()

// on appele la méthode fetchSimilarTv() pour récupérer les données sur les tv similaires.
similarTvStore.fetchSimilarTv(tvId)

// la fonction storeToRefs() pour transformer la propriété « similarTv » de l'état du magasin en un objet réactif. 
const {similarTv} = storeToRefs(similarTvStore)

const posterPath = tvPosterPath

</script>


<template>
  <div class="container-fluid similar-tv text-center">
    <span class="diviser-line d-inline-block mb-4"></span>
    <h2>Recommendations for You</h2>
    <div class="row my-5">
       <div class="col d-flex flex-wrap">
         <template v-for="tv in similarTv" :key="tv.id">
          <div class="tv-card" v-if="tv.poster_path">
            <div class="poster" >
              <img :src="posterPath + tv.poster_path" alt="poster">
            </div>
            <div class="text">
              <h5 v-if="tv.name">{{ tv.name }}</h5>  
              <small class="text-secondary" v-if="tv.release_date">({{ tv.release_date }})</small>
              <!-- popularité de tv -->
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
.thumbs-up {
  color:var(--primary-color);
}
}


</style>