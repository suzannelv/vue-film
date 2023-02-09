<template>
  <div class="nav-bar">
    <!-- narbar item -->
    <div class="px-3 py-2 text-bg-dark">
      <div class="container">
        <div class="d-flex align-items-center justify-content-lg-start" >
          <!-- logo du site -->
          <router-link to="/home">
           <a><img src="@/assets/img/logo/favicon-32x32.png" alt="logo Film Franzy"/></a>
          </router-link>

          <!-- Parcourir les 'item' de Navbar dans navbar.js -->
          <template v-for="(item, index) in navbarData">
            <div class="nav-bar-item d-flex mx-3 align-items-center" 
                 :class="{ active: currentIndex === index }"
                @click="itemClick(index, item)">
              <span>{{ item.icon }}</span>
              <span>{{ item.text }}</span>
            </div>
          </template>

            <!-- Login/sign up -->
          <div class="text-end">
            <button type="button" class="btn btn-light text-dark me-2">Sign in</button>
            <button type="button" class="btn btn-primary">Sign up</button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import navbarData from '@/assets/data/navbar.js';
import { ref } from 'vue';
import {useRouter} from 'vue-router';

const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}

</script>

<style lang="less" scoped>
.active {
    color: var(--primary-color);
   }

</style>