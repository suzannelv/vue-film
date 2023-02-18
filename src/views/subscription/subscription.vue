
<script setup>
import subscriptionDetail from './cpns/subscriptionDetail.vue'
import payment from './cpns/payment.vue';
</script>

<template>
  <div class="subscription">
    <div class="container py-3">
      <!-- Présentation des avantages brève sur l'abonnanement -->
      <div class="text-subscription">
        <h2>Choose the plan that's right for you</h2>
        <ul class="fs-5 my-4">
          <li><fa icon="check" class="check-color me-3"/>Watch all you want.</li>
          <li><fa icon="check" class="check-color me-3"/>Recommendations just for you.</li>
          <li><fa icon="check" class="check-color me-3"/>Change or cancel your plan anytime.</li>
        </ul>
      </div>

      <main>
        <!-- détail d'abonnements différents -->
        <subscriptionDetail/>

        <!-- paiement -->
        <payment/>
      </main>

 
   </div>
  </div>
</template>


<style lang="less" scoped>
.check-color {
  color: var(--primary-color)
}

.active {
  border: 3px solid skyblue;
}

</style>