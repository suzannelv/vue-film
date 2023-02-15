import axios from "axios"
import { BASE_URL, API_KEY,TIMEOUT } from "./config"
import useLoadingStore from "@/stores/modules/loadingStore"

const loadingStore = useLoadingStore()

class ffRequest {

  constructor(baseURL, api, timeout){
    this.instance = axios.create({
      baseURL,
      api,
      timeout
    })
  // Utiliser les intercepteurs pour afficher un indicateur de chargement afin d'informer l'utilisateur que l'application est en train de récupérer les données.
    this.instance.interceptors.request.use(config => {
     loadingStore.isLoading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      loadingStore.isLoading = false
      return res
    }, err => {
      loadingStore.isLoading = false
      return err
    })
  }

 request(config) {
  return new Promise((resolve, reject)=>{
    this.instance.request(config).then(res=>{
      resolve(res.data)
    }).catch(err=>{
      reject(err)
    })
  })
 }

 get(config) {
  return this.request({...config, method: "get"})
 }

//  post(config) {
//   return this.request({...config, method: "post"})
//  }
}

export default new ffRequest(BASE_URL, API_KEY, TIMEOUT)