<script setup>
// importer les carte sur les films populaires
import pMoviesCard from '@/components/movieCard/pMoviesCard.vue';

</script>


<template>

  <div class="popular-movies container-fluid justify-content-center">
    <h2 class="text-center py-3">Popular Movies</h2>
      <pMoviesCard/>
  </div>
</template>



<style lang="less" scoped>
</style>
