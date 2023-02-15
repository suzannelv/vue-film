<template>
  <div class="notice-bar container-fluid">
    <van-notice-bar left-icon="volume-o" 
                    :scrollable="false" 
                   >
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :touchable="false"
        :show-indicators="false"
       
        
      >
       <van-swipe-item>Join VIP now for unlimited access!</van-swipe-item>
       <a href="/subscription" class="text-decoration-none text-dark">
        <van-swipe-item>Plans start et <span class="fw-bold">9.90 €</span>/month !
        <van-icon name="fire" color="#ee0a24" />    
        <van-icon name="arrow" class="ms-2" />
        </van-swipe-item>
      </a> 
 
      </van-swipe>
    </van-notice-bar>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>