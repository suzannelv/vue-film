<script setup>
import popularTv from '../home/cpns/popularTv.vue';
import topTv from '../tv/cpns/topTv.vue';
import latestTv from './cpns/latestTv.vue';
import backUp from '@/components/back-up/backUp.vue';

</script>

<template>
   <!-- section banner -->
   <div class="banner">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- première banner de carousel -->
        <div class="carousel-item active" data-bs-interval="5000">
          <!-- image -->
          <img src="@/assets/img/banner/banner_tv1.jpg" class="d-block w-100" alt="The Last of Us">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
            <!-- titre -->
              <h2 class="fw-bold text-light">The Last of Us</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <!-- infos brève de la tv -->
                <button type="button" class="btn text-light btn-top">TOP3</button>
                <button type="button" class="btn text-light btn-date">2023</button>
                <button type="button" class="btn text-light btn-limiteAge">12+</button>
              </div>
              <!-- description briève de la tv -->
              <div class="description">
                <p class="text-light">Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.</p>
              </div>
          </div>
        </div>
        <!-- deuxième banner de carousel -->
        <div class="carousel-item">
          <img src="@/assets/img/banner/banner_tv2.jpg" class="d-block w-100" alt="Game of Witches">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
              <h2 class="text-light fw-bold">Game of Witches</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <button type="button" class="btn text-light btn-top">TOP9</button>
                <button type="button" class="btn text-light btn-date">2022</button>
              </div>
              <div class="description">
                <p class="text-light">Yu Kyung is a successful woman who is proficient enough to become an executive director of Chunha Group when she started as a secretary. She recently found out her daughter is alive, so she plans to get her back and take her revenge. Meanwhile, Hye Soo is a strong girl who faces challenges head-on. She has a daughter with Ji Ho, and she would do anything for her. However, she gets tragically betrayed by Ji Ho, the love of her life, over power and money. How will those two mothers end their fierce revenge?</p>
              </div>
           </div>
        </div>
        <!-- trosième banner de carousel -->
        <div class="carousel-item">
          <img src="@/assets/img/banner/banner_tv3.jpg" class="d-block w-100" alt="Miraculous: Tales of Ladybug & Cat Noir">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
              <h2 class="text-light fw-bold">Miraculous: Tales of Ladybug & Cat Noir</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <button type="button" class="btn text-light btn-top">TOP8</button>
                <button type="button" class="btn text-light btn-date">2015</button>
              </div>
              <div class="description">
                <p class="text-light">Normal high school kids by day, protectors of Paris by night! Miraculous follows the heroic adventures of Marinette and Adrien as they transform into Ladybug and Cat Noir and set out to capture akumas, creatures responsible for turning the people of Paris into villains. But neither hero knows the other’s true identity – or that they’re classmates!</p>
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
  <popularTv/>

  <div class="diviser-line mx-auto"></div>
  <topTv/>
  
  <div class="diviser-line mx-auto"></div>
  <latestTv/>

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