import { createApp } from 'vue'
import pinia from './stores'
import router from './router/index'
import App from './App.vue'

// importer les fichiers de CSS réinitialisés
import "normalize.css"
import "./assets/CSS/index.css"

// importer les packages de Bootstrap
import "bootstrap/dist/css/bootstrap.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"

// importer les packages de fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faB} from '@fortawesome/free-solid-svg-icons'

library.add(fas, faB)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(bootstrap)
app.component('fa', FontAwesomeIcon)


app.mount('#app')
