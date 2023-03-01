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
  // la méthode getMoreTv pour afficher la page suivante
  const getMoreTv = () => {
    pTvStore.fetchPopularTv()
  }

</script>

<template>
  <div class="popular-tv container-fluid">
    <div class="row">
      <!--parcourir le tableau de tv popularTv et crée une carte pour chaque tv. La propriété :key est utilisée pour aider à identifier chaque élément dans la liste.  -->
      <template v-for="tv in popularTv" :key="tv.id">
        <div class="col my-4" @click="itemClick(tv.id)">
          <div class="card mx-auto" style="width: 18rem;">
            <!-- image de l'affiche de la tv -->
            <img :src="posterPath + tv.poster_path" class="card-img-top" alt="tv-poster">
            <div class="card-body reset-size">
              <!-- titre -->
              <h5 class="card-title">{{tv.name}} 
                <!-- date de sortie -->
                <small class="text-secondary fs-6" v-if="tv.first_air_date">({{ tv.first_air_date}})</small>
              </h5> 
              <!-- note de tv -->
              <p class="card-text">
                <van-rate :model-value ="tv.vote_average" allow-half readonly color="#f4f431"/>
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
    <!-- cliquer le bouton pour afficher plus de tvs -->
    <button class="btn round-5 text-light loadBtn" @click="getMoreTv">Load More</button>
  </van-divider>
</template>



<style lang="less" scoped>
.reset-size {
  width: 286px;
  height: 180px;
}
.thumbs-up {
  color:var(--primary-color);
 
}
.loadBtn {
  background-color: rgb(152, 190, 192);
}

</style>