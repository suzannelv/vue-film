import { createRouter, createWebHistory } from 'vue-router'

// créer une instance de Vue Router
const router = createRouter({
  // gérer l'historique de navigation de l'application
  history: createWebHistory(import.meta.env.BASE_URL),
  // path -> components
  // Lazy Loading Routes->charger le composant de manière asynchrone, un moyen de diviser le code d'acheminement en plusieurs petits morceaux de code et de les charger uniquement lorsque cela est nécessaire.
  // Cela peut réduire efficacement le temps de chargement initial et améliorer les performances de l'application .
  routes: [
    {
      path:"/",
      redirect: "/home"
    },
    {
      path:"/home",
      component: () => import ("@/views/home/home.vue")
  
    }, 
    {
      path:"/popularmovies",
      component: () => import ("@/views/home/cpns/popularMovies.vue")
  
    }, 
    {
      path:"/populartv",
      component: () => import ("@/views/home/cpns/popularTv.vue")
  
    }, 

    {
      path:"/movie",
      component: () => import("@/views/movie/movie.vue")
    },
    {
      path:"/tv",
      component: () => import("@/views/tv/tv.vue")
    },
  
    {
      path:"/contact",
      component: () => import("@/views/contact/contact.vue")
    },   
    
    {
      path:"/subscription",
      component: () => import("@/views/subscription/subscription.vue"),
      meta: {
        hideNoticeBar:true
      }
    }, 

    {
      path:"/detail/:id",
      component: () => import("@/views/detail/movieDetail.vue")
    },
    {
      path:"/detailtv/:id",
      component: () => import("@/views/detail/tvDetail.vue")
    },     
  
  ]
})

export default router
