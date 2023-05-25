import {createApp} from "vue"
import App from "./App.vue"
import "normalize.css"
import "@/assets/styles/common.less"
import router from "@/router/index"
import {createPinia} from "pinia"
import XtxUI from "@/components/XtxUI";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app  = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.use(XtxUI)
app.mount("#app")