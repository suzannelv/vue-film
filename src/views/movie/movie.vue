<script setup>

import popularMovies from '../home/cpns/popularMovies.vue';
import topMovies from './cpns/topMovies.vue';
import comingMovies from './cpns/comingMovies.vue'
import backUp from '@/components/back-up/backUp.vue';

</script>

<template>
  <!-- carousel sur les fils en cours -->
   <div class="banner">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- première banner de carousel -->
        <div class="carousel-item active" data-bs-interval="5000">
          <!-- image -->
          <img src="@/assets/img/banner/banner_movie1.jpg" class="d-block w-100" alt="Ant-Man and the Wasp: Quantumania">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
            <!-- titre -->
              <h2 class="fw-bold text-light">Ant-Man and the Wasp: Quantumania</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <!-- infos brève du film -->
                <button type="button" class="btn text-light btn-top">TOP1</button>
                <button type="button" class="btn text-light btn-date">2023</button>
                <button type="button" class="btn text-light btn-limiteAge">12+</button>
              </div>
              <!-- description briève du film -->
              <div class="description">
                <p class="text-light">Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.</p>
              </div>
          </div>
        </div>
        <!-- deuxième banner de carousel -->
        <div class="carousel-item">
          <img src="@/assets/img/banner/banner_movie2.jpg" class="d-block w-100" alt="Black Panther: Wakanda Forever">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
              <h2 class="text-light fw-bold">Black Panther: Wakanda Forever</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <button type="button" class="btn text-light btn-top">TOP2</button>
                <button type="button" class="btn text-light btn-date">2023</button>
              </div>
              <div class="description">
                <p class="text-light">Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.</p>
              </div>
           </div>
        </div>
        <!-- trosième banner de carousel -->
        <div class="carousel-item">
          <img src="@/assets/img/banner/banner_movie3.jpg" class="d-block w-100" alt="Inspector Sun and the Curse of the Black Widow">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
              <h2 class="text-light fw-bold">Inspector Sun and the Curse of the Black Widow</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <button type="button" class="btn text-light btn-top">TOP7</button>
                <button type="button" class="btn text-light btn-date">2022</button>
              </div>
              <div class="description">
                <p class="text-light">Shanghai, 1934. In an insect world parallel to that of humans, veteran Inspector Sun, a lone spider, leads his last mission against his archenemy the Red Locust, before embarking on a well-deserved retirement. His vacation aboard a Pan Am clipper between Shanghai and San Francisco comes to an abrupt end when millionaire Dr. Spindelthorp is found murdered. What begins as a routine case for Sun will ultimately decide the fate of humanity.</p>
              </div>
           </div>
        </div>
      </div> 
        <!--  bouton pour retourner la slide précédente -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <!-- bouton pour aller à la slide suivante -->
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> 
  </div>
    
    <backUp/>
    <div class="diviser-line mx-auto"></div>
    <popularMovies/>

    <div class="diviser-line mx-auto"></div>
    <topMovies/>

    <div class="diviser-line mx-auto"></div>
    <comingMovies/>

</template>

<style lang="less" scoped>

.banner {
  .carousel-item {
    position:relative;
    // le filtre de luminosité est appliqué à l'image pour la rendre plus sombre
    img {
      filter:brightness(0.7);
    }

    .banner-text {
     padding-left:200px;
    }
    // des pseudo-éléments qui sont ajoutés avant et après chaque élément avec la classe "carousel-item". 
    .carousel-item::before,
    .carousel-item::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 50%;
      // Un fond linéaire avec un dégradé de noir semi-transparent est appliqué à ces éléments pour donner l'effet de fondu.
      background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);
    }
  .carousel-item::after{
    right:0;
    left: auto;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.6), transparent);
  }

  .btn-top {
    background-color: rgb(84, 222, 72);
  }

  .btn-date, 
  .btn-limiteAge {
    background-color: rgb(168, 170, 173);

  }

  .description {
    width: 400px;
    height: 300px;

// limiter la hauteur de l'élément <p> et d'empêcher le texte de dépasser.
    p{
      overflow:hidden; 
      text-overflow:ellipsis;
      // utiliser les propriétés de boîte WebKit pour contrôler la hauteur de l'élément.
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      // seul le texte des deux premières lignes sera visible, le reste sera remplacé par des ellipses.
      -webkit-line-clamp:2; 
    }
  }
  }

}
</style>