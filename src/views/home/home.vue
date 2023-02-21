<script setup>
import search from './cpns/search.vue';
import popularMovies from './cpns/popularMovies.vue';
import popularTv from './cpns/popularTv.vue';
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
          <img src="@/assets/img/banner/home_banner1.jpg" class="d-block w-100" alt="banner">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
            <!-- titre -->
              <h2 class="text-danger fw-bold">Blood</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <!-- infos brève du film -->
                <button type="button" class="btn text-light btn-top">TOP10</button>
                <button type="button" class="btn text-light btn-date">2023</button>
                <button type="button" class="btn text-light btn-limiteAge">18+</button>
              </div>
              <!-- description briève du film -->
              <div class="description">
                <p class="text-light">Jess, a newly separated mother and nurse, moves into her old family farmhouse with Tyler, her teenage daughter, and Owen, her eight-year-old son. One night, the family dog senses something in the woods and runs off to find it. He returns a couple of days later and attacks Owen, savagely biting him before Jess is able to intervene. Owen is rushed to the hospital. His condition worsens, and no one can figure out why... until Jess discovers a disturbing cure...</p>
              </div>
          </div>
        </div>
        <!-- deuxième banner de carousel -->
        <div class="carousel-item">
          <img src="@/assets/img/banner/home_banner2.jpg" class="d-block w-100" alt="banner">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
              <h2 class="text-light fw-bold">Puss in Boots: The Last Wish</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <button type="button" class="btn text-light btn-top">TOP5</button>
                <button type="button" class="btn text-light btn-date">2022</button>
              </div>
              <div class="description">
                <p class="text-light">Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.</p>
              </div>
           </div>
        </div>
        <!-- trosième banner de carousel -->
        <div class="carousel-item">
          <img src="@/assets/img/banner/home_banner3.jpg" class="d-block w-100" alt="banner">
          <div class="banner-text d-none d-md-block position-absolute top-50 ms-5">
              <h2 class="text-light fw-bold">Babylon</h2>
              <div class="btn-group btn-group-sm " role="group" aria-label="Small button group">
                <button type="button" class="btn text-light btn-top">TOP6</button>
                <button type="button" class="btn text-light btn-date">2022</button>
                <button type="button" class="btn text-light btn-limiteAge">12+</button>
              </div>
              <div class="description">
                <p class="text-light">A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.</p>
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
    <!--Section rechercher -->
    <div class="search">
      <search/>
    </div>

    <!-- Section films populaires -->
    <popularMovies/>

    <!-- Section TV populaires -->
    <popularTv/>
    
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