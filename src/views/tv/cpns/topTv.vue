<template> 
  <div class="container top-movie text-center">
    <span class="diviser-line d-inline-block mb-4"></span>
    <h2>Top List</h2>
    <div class="row my-5">
       <div class="col d-flex flex-wrap">
         <template v-for="tv in topTv" :key="tv.id">
          <div class="tv-card"  @click="itemClick(tv.id)">
            <div class="poster" v-if="tv.poster_path">
                <img :src="posterPath + tv.poster_path" alt="poster">
              </div>
              <div class="text">
                <h5>{{ tv.name }}</h5>  
                <small class="text-secondary" v-if="tv.first_air_date">({{ tv.first_air_date }})</small>
                <p>Popularity: {{ tv.popularity }}</p>
              </div>
          </div>
               
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { tvPosterPath } from '@/services/request/config';
import useTvStore from '@/stores/modules/tvStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const topTvStore = useTvStore()
topTvStore.fetchTopTv()
const {topTv} = storeToRefs(topTvStore)


const posterPath = tvPosterPath

const router = useRouter()
const itemClick = (id) => {
  router.push("/detailtv/" + id)
}

</script>

<style lang="less" scoped>

.tv-card {
  width: 220px;
  height: 500px;
  img {
  width: 200px;
  height: 350px;
  object-fit: cover;
}
}


</style>