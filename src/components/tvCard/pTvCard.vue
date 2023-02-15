<template>
  <div class="pTv container-fluid">
    <div class="row">
      <template v-for="tv in popularTv" :key="tv.id">
        <div class="col my-4" @click="itemClick(tv.id)">
          <div class="card" style="width: 18rem;">
            <img :src="posterPath + tv.poster_path" class="card-img-top" alt="tv-poster">
            <div class="card-body reset-size">
              <h5 class="card-title">{{tv.name}} 
                <small class="text-secondary fs-6" v-if="tv.first_air_date">({{ tv.first_air_date}})</small>
              </h5> 
              <p class="card-text">
                <van-rate :model-value ="tv.vote_average" allow-half readonly color="#f4f431"/>
                <!-- {{ tv.vote_average }}  -->
                <fa icon="thumbs-up" class="thumbs-up ms-2"/>
              </p>
               <button class="btn btn-secondary position-absolute bottom-0 mb-3">Learn more</button> 
            </div>
          </div>
        </div>
      </template>
    </div>
    
  </div>
</template>

<script setup>

import {tvPosterPath} from '@/services/request/config'
import useTvStore from '@/stores/modules/tvStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// la fonction useTvStore() pour instancier le magasin "tv". 
const pTvStore = useTvStore()
// on appele la méthide fetchPopularTv() pour récupérer les données sur les tv populaires.
pTvStore.fetchPopularTv()
// la fonction storeToRefs() pour transformer la propriété « popularTv » de l'état du magasin en un objet réactif. 
const {popularTv} = storeToRefs(pTvStore)

// importer et utiliser le chemin d'accès commun aux affiches des tv populaires pour afficher les images dans l'application.
const posterPath = tvPosterPath


// utiliser l'objet routerde la bibliothèque Vue Router pour naviguer vers une route spécifique lorsque l'utilisateur clique sur une tv
const router = useRouter()

/**
 * Lorsque la fonction itemClick est appelée, elle prend un argument id, qui est l'identifiant d'un télévision sélectionnée. 
 * La fonction utilise ensuite la méthode push de l'objet router pour naviguer vers la route "/detailtv/" + id. 
 */
  const itemClick = (id) => {
    router.push("/detailtv/" + id)
  }

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