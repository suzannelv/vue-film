<template>
  <div class="app">
    <!-- faire cacher notice-bar pour la page /subscription -->
    <notice-bar v-show="!$route.meta.hideNoticeBar"/>
    <nav-bar/>    
    <router-view/>
    <loading/>
    <footer-common/>
    
  </div>
</template>

<script setup>
import noticeBar from './components/notice-bar/noticeBar.vue';
import NavBar from './components/nav-bar.vue/nav-bar.vue';
import loading from './components/loading/loading.vue';
import footerCommon from './components/footer/footerCommon.vue';
</script>

<style lang="less" scoped>

</style>
