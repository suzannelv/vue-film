<template>
  <div class="tv">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="@/assets/img/banner/banner1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/banner/banner2.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
</div>
  </div>

  
  <div class="diviser-line mx-auto"></div>
  <popularTv/>
  <div class="diviser-line mx-auto"></div>
  <topTv/>
  <div class="diviser-line mx-auto"></div>
  <latestTv/>

</template>

<script setup>
import popularTv from '../home/cpns/popularTv.vue';
import topTv from '../tv/cpns/topTv.vue';
import latestTv from './cpns/latestTv.vue';


</script>

<style lang="less" scoped>
</style>