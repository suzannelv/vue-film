
<script setup>
import { ref, watch } from 'vue'
// l'utilisateur n'est pas connecté au début
const isLogin = ref(false)
// la fenêtre de connexion est masquée.
const log = ref(0)
// uname et upwd sont initialisés à une chaîne vide.
const uname = ref('')
const upwd = ref('')

// showLogin() est appelée lorsque l'utilisateur clique sur le lien "Login" dans l'interface utilisateur. 
const showLogin = () =>{
log.value=1
}

// fonction close() est appelée lorsque l'utilisateur clique sur le bouton de fermeture de la fenêtre de connexion.
const close = () =>{
  log.value = 0
  uname.value = ''
  upwd.value = ''
}
//  La fonction login() est appelée lorsque l'utilisateur clique sur le bouton "Login" dans la fenêtre de connexion.
const login = () => {
  // si les valeurs des variables uname et upwd sont "test" et "123456",alors la valeur de log est réinitialisée à 0 pour masquer la fenêtre de connexion, et la valeur de isLogin est mise à true pour indiquer que l'utilisateur est connecté.
  if (uname.value === 'test' && upwd.value === '123456') {
    log.value = 0
    isLogin.value = true
  }
}
// La fonction logout() est appelée lorsque l'utilisateur clique sur le lien "Log out" dans l'interface utilisateur. 
const logout = () => {
  // réinitialiser la valeur de isLogin, uname et upwd.
  isLogin.value = false
  uname.value = ''
  upwd.value = ''
}
// la fonction watch surveille les changements des variables uname et upwd. 
watch([uname, upwd], () => {
  if (isLogin.value) {
    isLogin.value = false
  }
})

</script>

<template>
  <div class="login" v-cloak>
    <div class="account d-flex align-items-center">
      <img src="@/assets/img/avatar/avatar.png" alt="account icon"/>
      <!-- Si isLogin est vrai, il affiche le message "Bienvenue" et un lien vers "Déconnexion". -->
      <!-- Le @click.prevent est un modificateur d'événement qui indique à Vue d'appeler la fonction de déconnexion lorsque le lien "Déconnexion" est cliqué ou la fonction showLogin lorsque le lien "Connexion" est cliqué.  -->
      <div v-if="isLogin" class="text-light"> Welcome | <a href="#" @click.prevent="logout" class="text-light text-decoration-none">Log out</a></div>
      <!-- En revanche, si isLogin est faux, il affiche un lien "Connexion" et un texte "S'inscrire". -->
      <div v-else class="text-light"><a href="#" @click.prevent="showLogin" class="text-light text-decoration-none">Login </a>| Sign up</div>
    </div>

    <!-- La visibilité de la boîte de dialogue est contrôlée par une variable appelée "log" qui est soit 0, ce qui signifie qu'elle est cachée, soit 1, ce qui signifie qu'elle est affichée. -->
    <div id="login-box" 
         :style="{ display: log === 0 ? 'none' : 'block', zIndex: 1 }"
         class="card position-absolute rounded-4 text-light text-center ">

         <!-- titre de fenêtre -->
         <h3 class="gradient-title fw-bold">Welcome to FilmFranzy</h3>
      <form class="mt-2 ">
        <!-- compte:username -->
        <label class="d-flex align-items-center my-3"> 
          <fa icon="user" class="fs-4 me-2"/>
          <input v-model="uname" type="text" class="form-control" placeholder="Enter your username">
        </label>
         
        <!-- mot de pass -->
        <label class="d-flex align-items-center">
          <fa icon="unlock-keyhole" class="fs-4 me-2"/>
          <input v-model="upwd" type="password" class="form-control" placeholder="Enter your password">
        </label>
        <div>
           <button class="btn mt-3 fw-bold" @click.prevent="login">Login</button>
        </div>
       
        <!-- fermer la fenêtre de login -->
        <p class="close btn-close bg-light position-absolute top-0 mt-1" @click.prevent="close"></p>
      </form>
    </div>
     <!-- utiliser la directive :style pour basculer la visibilité de l'arrière-plan derrière la boîte de connexion pour assombrir l'arrière-plan et mettre en valeur la boîte de connexion.
      Si log vaut 0, la div est masquée (affichage : aucun), sinon elle est affichée (affichage : bloc) -->
    <div id="back" :style="{ display: log === 0 ? 'none' : 'block' }"></div>
  </div>
</template>



<style lang="less" scoped>

.login {

  .account {
    vertical-align: center;
    
    img {
    width: 30px;
    height: 30px;
     }
  }

    /*fenêtre de login*/
    #login-box{      
      display:none;
      // définir la position
      top:50%;
      left:50%; 
      padding: 20px;   
      margin-left: -200px;
      margin-top: 150px;
      // définir largeur et hauteur
      width: 400px;
      height:300px;

     // définir le style
      background-color: #00000098;
      box-shadow: 5px 10px #161616a8;

     //  définir le style de titre
     .gradient-title {
      background: linear-gradient(to right, rgb(210, 233, 238), rgb(86, 149, 153));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      }
 
      form {
        input {
          // définir la taille de input 
          width:80%px;
          height: 48px;
          // définir le style
          background-color: rgba(255, 255, 255, 0);
          border:0;
          border-bottom: 2px solid silver;
          font-size: 22px;
          color:white;
        }

        button {
          width: 40%;
          background-image: linear-gradient(120deg, #bfeae7 0%, #297b7b 100%);
          border-radius: 15px;
          border:0;
        
        }
        button:hover {
          background-image:linear-gradient(to right, #8bd4a2 0%, #7d9340 100%); ;
        }
      }
    

  
    }

    // fermer la fenêtre de login
    .close{
        right: 5px;
        cursor: pointer;
    }
    // fond
    #back{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background: #000;
        opacity: 0.5;
    }
}

</style>

 
