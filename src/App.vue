<template>
  <div class="app">
    <!-- <h1><fa icon="coffee" class="text-danger"/></h1>
    <h1><fa :icon="['faB', 'user']"/></h1> -->
    <!-- <h1><fa icon="user" class="text-primary"/></h1> -->



    <nav-bar/>    
    <router-view/>
    <footer-common/>
  </div>
</template>

<script setup>
import NavBar from './components/nav-bar.vue/nav-bar.vue';
import footerCommon from './components/footer/footerCommon.vue';
</script>

<style lang="less" scoped>

</style>
