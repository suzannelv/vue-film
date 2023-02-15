import { getPopularTv, getLatestTv, getTopTv } from "@/services/modules/tv";
import { defineStore } from "pinia";

// définir un store appelé 'useTvStores' 
const useTvStore = defineStore("tv", {
  state: () => ({
    // propriété ‘popularTv’ initialisée à un objet vide
    popularTv: [],
    currentPage: 1,
    latestTv: [],
    currentPageLatest: 1,
    topTv: [],
    currentPageTop: 1
  }), 
  actions: {
    // récupère les tvs populaires en appelant la fonction "getPopularTv" à partir du module "services"
    async fetchPopularTv() {
      const res = await getPopularTv(this.currentPage)
      // utiliser l'opérateur de décomposition pour que chaque élément du tableau res.results sera ajouté individuellement à la fin de la liste popularTv
      this.popularTv.push(...res.results) 
      // la propriété "currentPage" est incrémentée pour récupérer la page suivante lors de l'appel suivant à cette action.
      this.currentPage++
    }, 
    // récupère les tvs récentes en appelant la fonction "getLatestrTv" à partir du module "services"
    async fetchLatestTv() {
      const res = await getLatestTv(this.currentPageLatest)
      this.latestTv.push(...res.results)
      this.currentPageLatest++
    }, 
    // récupère les top tvs en appelant la fonction "getTopTv" à partir du module "services"
    async fetchTopTv() {
      const res = await getTopTv(this.currentPageTop)
      this.topTv.push(...res.results)
      this.currentPageTop++
    },

  }
})

export default useTvStore