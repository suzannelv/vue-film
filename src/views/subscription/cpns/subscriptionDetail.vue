<script setup>
import subscriptionData from '@/assets/data/subscription';
import { ref } from 'vue';

// Définissez une variable réactive 'currentIndex' et initialisez-la avec 0.
let currentIndex = ref(0)

// Mettez à jour la valeur de 'currentIndex' avec l'index cliqué.
const itemClick = (index)=> {
currentIndex.value = index
}

</script>

<template>
  <div class="subscriptionDetail">
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
       <!-- parcourir les données dans la subscriptionData -->
       <template v-for="(item, index) in subscriptionData">   
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <!-- titre d'abonnement -->
              <h4 class="my-0 fw-bold">{{item.text}}</h4>
            </div>
            <!-- présentation d'abonnement -->
            <!-- lier la class active à l'élément card-body, Cela ajoutera la classe active à l'élément card-body lorsque l'index de l'élément actuel correspond à la valeur de currentIndex. -->
            <div class="card-body" :class="{active:  index === currentIndex}">
              <h1 class="card-title pricing-card-title">{{item.price}}<small class="text-muted fw-light">/{{item.month}}</small></h1>
              <!-- présentation en détail -->
              <ul class="list-unstyled mt-3 mb-4 ms-5 text-start">
                <li>Video Quality: {{item.quality}}</li>
                <li>Resolution: {{ item.resolution }}</li>
                <li>Watch on your TV, computer, mobile phone and tablet:  {{item.match}}</li>
                <li>Downloads: {{ item.download }}</li>
              </ul>
              <!-- chaque fois que le bouton est cliqué, il appellera la méthode itemClick avec l'index cliqué comme argument. -->
              <button class="btn btn-primary" role="button" @click="itemClick(index)">Select</button>
            </div>   
          </div>
         </div>
       </template>
   
    </div>
  </div>
</template>


<style lang="less" scoped>
.active {
  background-color: rgb(218, 236, 236);
}

</style>