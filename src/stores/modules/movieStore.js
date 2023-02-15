import { getPopularMovies, getComingMovies, getTopMovies } from "@/services";
import { defineStore } from "pinia";

// définir un store appelé 'useMoviesStores' 
const useMoviesStore = defineStore("movies", {
  state: () => ({
    // propriété ‘popularMovies’ initialisée à un objet vide
    popularMovies: [],
    currentPage: 1,
    comingMovies: [],
    currentPageComing: 1,
    topMovies: [],
    currentPageTop: 1
  }), 
  actions: {
    // récupère les films populaires en appelant la fonction "getPopularMovies" à partir du module "services"
    async fetchPopularMovies() {
      const res = await getPopularMovies(this.currentPage)
       // utiliser l'opérateur de décomposition pour que chaque élément du tableau res.results sera ajouté individuellement à la fin de la liste popularMovies
      this.popularMovies.push(...res.results)
          // la propriété "currentPage" est incrémentée pour récupérer la page suivante lors de l'appel suivant à cette action.
      this.currentPage++
    }, 

     // récupère les films à venir en appelant la fonction "getComingMovies" à partir du module "services"
    async fetchComingMovies() {
      const res = await getComingMovies(this. currentPageComing)
      this.comingMovies.push(...res.results)
      this.currentPageComing++
    },

     // récupère les top films en appelant la fonction "getTopMovies" à partir du module "services"
    async fetchTopMovies() {
      const res = await getTopMovies(this.currentPageTop)
      this.topMovies.push(...res.results)
      this.currentPageTop++
    }, 

  }
})

export default useMoviesStore