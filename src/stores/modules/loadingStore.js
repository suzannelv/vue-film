import { defineStore } from "pinia";

const useLoadingStore = defineStore("loading", {
  state:() => ({
    isLoading: true,
  })
})

export default useLoadingStore