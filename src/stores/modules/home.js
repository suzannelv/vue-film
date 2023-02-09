import { getPopularMovies } from "@/services";
import { defineStore } from "pinia";

const usePMoviesStore = defineStore("popular movies", {
  state: () => ({
    popularMovies: {}
  }), 
  actions: {
    async fetchPopularMovies() {
      const res = await getPopularMovies()
      this.popularMovies = res.data
      console.log(res.data)
    }
  }
})

export default usePMoviesStore