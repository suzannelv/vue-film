<template>
  <div class="tabs">
    <div @click="item1Click()">
      <span>Movies</span>
    </div>
    <div @click="item2Click('/populartv')">
      <span>TV</span>
    </div>
  </div>
</template>

<script setup>
// const tabs = [
//   {
//     text: "Movies",
//     path: "/popularmovies"

import { useRouter } from 'vue-router';

//   },
//   {
//     text: "TV",
//     path: "/populartv"

//   }
// ]
const router = useRouter()
const item1Click = () => {
  router.push('/popularMovies')
}
</script>

<style lang="less" scoped>
</style>