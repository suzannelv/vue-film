<script setup>
import noticeBar from './components/notice-bar/noticeBar.vue';
import NavBar from './components/nav-bar.vue/nav-bar.vue';
import loading from './components/loading/loading.vue';
import footerCommon from './components/footer/footerCommon.vue';
</script>

<template>
  <div class="app">
    <!-- faire cacher notice-bar pour la page /subscription -->
    <notice-bar v-show="!$route.meta.hideNoticeBar"/>
    <nav-bar/>
    <!-- <router-view/> est un composant fourni par la librairie Vue Router qui affiche le composant correspondant à la route courante.
        C'est un espace réservé qui est remplacé par le composant qui correspond à l'itinéraire actuel.  -->
    <router-view/>
    <!-- affichier l'image de loadig lorsque la page est en train de charger -->
    <loading/>

    <footer-common/>
    
  </div>
</template>


<style lang="less" scoped>

</style>
