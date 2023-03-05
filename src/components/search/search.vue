<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';
import { BASE_URL, API_KEY } from '@/services/request/config';

// searchValue est initialisé avec une chaîne vide
const searchValue = ref("")
// results est initialisé avec un tableau vide.
const results = ref([])  
const router = useRouter()



// Fonction de recherche qui appelle l'API TMDb
async function search() {
  const url = `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchValue.value}`
  const response = await fetch(url)
  const data = await response.json()
  results.value = data.results

}

// Fonction pour rediriger l'utilisateur vers la page de détails du film ou de la série
function goToDetails(result) {

  if (result.media_type && result.media_type === "movie") {
    router.push(`/detail/${result.id}`)
  } else if (result.media_type && result.media_type === "tv") {
    router.push(`/detailtv/${result.id}`)
  }
}

// Fonction de surveillance qui appelle la fonction de recherche lorsque la valeur de `searchValue` change
watch(() => searchValue.value, () => {
  if (searchValue.value.length >=1) {
    search()
  } else {
    results.value = []
  }
})

</script>

<template>
  <form class="search d-flex" role="search">
    <input v-model="searchValue" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <span class="text-light fs-3 me-5"><fa icon="magnifying-glass" @click="search"/></span>
  </form>

  <div v-if="results.length > 0" class="listItem">
    <ul class="list-group">
      <li v-for="(result, index) in results" :key="index" class="list-group-item" @click="goToDetails(result)">{{ result.title || result.name }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.search {
  position: relative;
}

.listItem {
  position: absolute;
  top: 100%;
  left: 30%;
  width: 30%;
  z-index: 99;
}
</style> 