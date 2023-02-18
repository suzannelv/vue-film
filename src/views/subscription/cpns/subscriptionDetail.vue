<script setup>
import subscriptionData from '@/assets/data/subscription';
</script>

<template>
  <div class="subscriptionDetail">
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
       
       <template v-for="(item, index) in subscriptionData">   
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm"
              :class="{active: currentIndex === index}"
              @click="itemClick(index, item)">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">{{item.text}}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">{{item.price}}<small class="text-muted fw-light">/{{item.month}}</small></h1>
              <ul class="list-unstyled mt-3 mb-4 ms-5 text-start">
                <li>Video Quality: {{item.quality}}</li>
                <li>Resolution: {{ item.resolution }}</li>
                <li>Watch on your TV, computer, mobile phone and tablet:  {{item.match}}</li>
                <li>Downloads: {{ item.download }}</li>
              </ul>
              <button class="btn btn-primary" role="button">Select</button>
            </div>   
          </div>
         </div>
       </template>
   
    </div>
  </div>
</template>


<style lang="less" scoped>
</style>