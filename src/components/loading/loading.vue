<script setup>
import useLoadingStore from '@/stores/modules/loadingStore';
// importer la méthode useLoadingStore du module loadingStore, qui contient la propriété isLoading à surveiller pour afficher ou masquer le composant de chargement. 
const loadingStore = useLoadingStore()
// définir une fonction loadingClick() pour désactiver la propriété isLoading de mainStore.
function loadingClick () {
  loadingStore.isLoading=false
}
</script>

<template>
  <div class="loading" v-if="loadingStore.isLoading" @click="loadingClick">
    <h2 class="bg">
      <img src="@/assets/img/loading/loading.gif" alt="loading gif">
    </h2>
  </div>
</template>


<style lang="less" scoped>
// définir le style de l'animation de chargement pour qu'elle soit centrée horizontalement et verticalement sur la page
.loading{
  position: fixed;
  z-index: 99;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // fond devient semi-tranparent quand il est entrain de charger
  background-color: rgba(0, 0, 0, .2 );
  
  img {
    width: 70px;
    height: 70px;
  }
}

</style>