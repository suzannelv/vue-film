import axios from "axios"
import { BASE_URL, API_KEY,TIMEOUT } from "./config"
import useLoadingStore from "@/stores/modules/loadingStore"
// La méthode useLoadingStore est utilisée pour obtenir une instance du magasin loadingStore.
const loadingStore = useLoadingStore()

// la classe ffRequest est définie avec un constructeur prenant comme paramètres l'URL de base, la clé API et le délai d'attente, et qui crée une instance Axios avec ces paramètres.
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
    // isLoading est devenu false dans le magasin loadingStore lorsque la réponse est reçue avec succès
    this.instance.interceptors.response.use(res => {
      loadingStore.isLoading = false
      return res
    }, err => {
      // Si une erreur se produit, l'intercepteur de réponse la renvoie
      loadingStore.isLoading = false
      return err
    })
  }

// La méthode request retourne une promesse qui résout avec les données renvoyées par la requête ou qui rejette avec l'erreur renvoyée.
 request(config) {
  return new Promise((resolve, reject)=>{
    this.instance.request(config).then(res=>{
      resolve(res.data)
    }).catch(err=>{
      reject(err)
    })
  })
 }
// La méthode get est utilisée pour envoyer une requête HTTP GET.
 get(config) {
  return this.request({...config, method: "get"})
 }

}

export default new ffRequest(BASE_URL, API_KEY, TIMEOUT)