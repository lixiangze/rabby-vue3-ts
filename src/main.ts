import {createApp} from "vue"
import App from "./App.vue"
import "normalize.css"
import "@/assets/styles/common.less"
import router from "@/router/index"
import {createPinia} from "pinia"
import XtxUI from "@/components/XtxUI";
const app  = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(XtxUI)
app.mount("#app")