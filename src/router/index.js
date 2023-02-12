import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path -> components
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
      component: () => import("@/views/subscription/subscription.vue")
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
