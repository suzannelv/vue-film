<template>
  <div class="popular-tv">
    <template v-for="(item, index) in movieData" :key="index">
      <div class="tv-item">
        {{ item.name }}
        
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      movieData: null,
    };
  },
  mounted() {
    axios.get('https://sangria-walkingstick-kit.cyclic.app/api/movies')
      .then(response => {
        this.movieData = res;
        console.log(res)
      });
     
  },

};


</script>

<style lang="less" scoped>
</style>