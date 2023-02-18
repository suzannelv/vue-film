<script setup>
</script>

<template>
  <div class="notice-bar container-fluid">
    <!-- importer un composant van-notice-bar de Vant pour afficher les notices sur les abonnements -->
    <van-notice-bar left-icon="volume-o" 
                    :scrollable="false" 
                   >
    <!-- Le composant van-swipe est configuré pour défiler automatiquement toutes les 3 secondes, ne pas être tactile et ne pas afficher d'indicateurs -->
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :touchable="false"
        :show-indicators="false" 
      >
         <van-swipe-item>Join VIP now for unlimited access!</van-swipe-item>
         <!-- cliquer pour renvoie à une page d'abonnement -->
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

<style lang="less" scoped>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>