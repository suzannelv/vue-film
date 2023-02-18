<script setup>
import { ref } from 'vue';

// Liaison bidirectionnelle sur un élément de saisie de formulaire
const searchValue = ref("")
</script>

<template>
  <div class="search d-flex my-3 container">
      <input v-model="searchValue" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-info" type="submit">Search</button> 
  </div>
</template>

<style lang="less" scoped>
</style>