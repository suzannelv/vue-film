import { defineStore } from "pinia";

// définit un magasin (store) Pinia appelé "loading".
const useLoadingStore = defineStore("loading", {
  state:() => ({
    // initialiser true
    isLoading: true,
  }),
 
})

export default useLoadingStore