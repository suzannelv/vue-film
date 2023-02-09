<template>
  <div class="banner">
    <!-- <div class="px-4 py-5 my-5 text-center">
      <div class="banner">
        <img src="@/assets/img/banner/banner.jpg" alt="">
      </div>

      <div class="banner-text">
        <h1 class="display-5 fw-bold mt-5 text-light">A Movie for Every Mood</h1>
        <div class="col-lg-6 mx-auto text-light">
          <p class="lead mb-4">Get ready to be transported to the world of cinema with FilmFranzy. From blockbusters to indie gems, we've got it all. Start your journey now.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Play</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4 text-light">More</button>
          </div>
        </div>
      </div>
      
    </div> -->

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


  <!--Section rechercher -->
  <div class="search">
    <search/>
  </div>

  <!-- Section films populaires -->
  <popularMovies/>


  <!-- Section TV populaires -->
  <popularTv/>

<!-- <tabs/> -->

</template>

<script setup>
import search from './cpns/search.vue';
import popularMovies from './cpns/popularMovies.vue';
import popularTv from './cpns/popularTv.vue';

import tabs from '@/components/tabs/tabs.vue';


</script>

<style lang="less" scoped>
</style>