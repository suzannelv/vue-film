<template>
  <div class="loading" v-if="loadingStore.isLoading" @click="loadingClick">
    <h2 class="bg">
      <img src="@/assets/img/loading/loading.gif" alt="loading gif">
    </h2>
  </div>
</template>

<script setup>
import useLoadingStore from '@/stores/modules/loadingStore';

const loadingStore = useLoadingStore()

function loadingClick () {
  mainStore.isLoading=false
}
</script>

<style lang="less" scoped>

.loading{
  position: fixed;
  z-index: 99;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .2 );
  
  img {
    width: 70px;
    height: 70px;
  }
}

</style>